import React from "react";
import commerce from "../../../lib/commerce";
import { useCartDispatch } from "../../../context/CartContext";

const QuantityControl = ({ item }) => {
  const { setCart } = useCartDispatch();
  console.log("decremses", item);
  const handleUpdateCart = (cart) => {
    setCart(cart);
  };
  const removeItem = () => {
    commerce.cart
      .remove(item.id)
      .then((cart) => handleUpdateCart(cart))
      .catch((error) => console.log(error));
  };
  const decrease = () => {
    item.quantity == 1 && removeItem();
    item.quantity > 1 &&
      commerce.cart
        .update(item.id, { quantity: item.quantity - 1 })
        .then(handleUpdateCart);
  };
  const increase = () => {
    commerce.cart
      .update(item.id, { quantity: item.quantity + 1 })
      .then(handleUpdateCart);
  };
  return (
    <div className="flex gap-2">
      <button onClick={decrease}>-</button>
      <span>{item.quantity}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default QuantityControl;
