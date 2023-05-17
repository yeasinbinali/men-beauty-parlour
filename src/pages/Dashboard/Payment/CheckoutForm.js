import React, { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);

  const { price, name, email, _id } = booking;

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({price})
    })
    .then(res => res.json())
    .then(data => setClientSecret(data.clientSecret))
  }, [price])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if(error){
      setCardError(error.message);
    }else{
      setCardError('');
    }
    setSuccess('');
    setProcessing(true);

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email
          },
        },
      },
    );

    if(confirmError){
      setCardError(confirmError.message);
      return
    }
    
    if(paymentIntent.status === 'succeeded'){

      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id
      }

      fetch('http://localhost:5000/payments', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payment)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          setSuccess('Congrats! Your payment completed');
          setTransactionId(paymentIntent.id);
        }
      })

    }
    setProcessing(false);

  };

  return (
    <section className='my-5'>
      <form className="w-96" onSubmit={handleSubmit}>
        <CardElement
          className="border-4 p-3 rounded-full"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="mt-4 btn btn-sm btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className='text-red-600'>{cardError}</p>
      {
        success && <div className='mt-2'>
          <p className='text-green-700'>{success}</p>
          <p>Your transactionId is: <strong>{transactionId}</strong></p>
        </div>
      }
    </section>
  );
};

export default CheckoutForm;
