import React from 'react'
import Orders from "./Orders"
import Discount from "./Discount"
import Summary from './Summary'
import { useCartState } from "../../../context/CartContext";
const OrderSummary = () => {
  const cart = useCartState();
    console.log(cart)
  return (
    <div className="justify-center hidden overflow-auto lg:w-1/2 bg-paperGray lg:flex">
      <div id="container" className="h-auto mt-10 lg:w-3/5">
        <h1 className="text-lg font-bold">Votre commande</h1>
        <Orders orders={cart.total_items}/>
        <Discount discount={cart.discount}/>
        <hr className='mt-6 mb-6 bg-border'/>
        <Summary subtotal={cart.subtotal}/>
      </div>
    </div>
  )
}

export default OrderSummary