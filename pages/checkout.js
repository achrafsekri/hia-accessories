import React from "react";
import CheckoutHeader from "../components/pages/Checkout/CheckoutHeader";
import CheckoutPage from "../components/pages/Checkout/CheckoutPage";
const checkout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <CheckoutHeader />
      <CheckoutPage />
    </div>
  );
};

export default checkout;
