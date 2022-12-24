import React from "react";
import Order from "./order";
const Orders = ({orders}) => {
  return <div className="mt-6 border rounded-lg border-border">
    <Order />
    <hr className="bg-border"/>
    <Order />
  </div>;
};

export default Orders;
