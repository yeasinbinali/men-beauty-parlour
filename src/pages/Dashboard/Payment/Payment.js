import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { serviceName, date, slot, price } = booking;
  console.log(booking);

  if (navigation.state === "loading") {
    return <div>Loading...</div>;
  }

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

  return (
    <div className="border-2 p-2 my-5">
      <p>Card Number: 4242 4242 4242 4242</p>
      <p>Date: Any Future Date</p>
      <p>CVC: Any 3digits</p>
      <p>ZIP: Any 5digits</p>
      <h2 className="md:text-2xl text-md font-bold">
        Payment for <strong className="text-primary">{serviceName}</strong>
      </h2>
      <p>
        Please pay <strong>{price}</strong> for your appointment on {date} at{" "}
        {slot}
      </p>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
