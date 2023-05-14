import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const booking = useLoaderData();
  const { serviceName, date, slot, price } = booking;

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
  console.log(stripePromise);

  return (
    <div className='border-2 p-2 my-5'>
      <h2 className="text-2xl font-bold">
        Payment for <strong className="text-primary">{serviceName}</strong>
      </h2>
      <p>
        Please pay <strong>{price}</strong> for your appointment on {date} at{" "}
        {slot}
      </p>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
