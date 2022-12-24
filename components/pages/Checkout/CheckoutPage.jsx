import React from "react";
import OrderSummary from "./OrderSummary";
import PayementSection from "./PayementSection";

const CheckoutPage = () => {
  return (
    <div className="flex w-full h-90%  ">
      <OrderSummary />
      <PayementSection />
    </div>
  );
};

export default CheckoutPage;
