import React from "react";
import { Drawer } from "@mui/material";
import CartProduct from "./CartProduct";
import { useCartState } from "../../../context/CartContext";
const CartDrawer = ({ toggleDrawer, state }) => {
  const cart = useCartState();
  console.log("cart drawer");
  return (
    <Drawer
      anchor="right"
      open={state.right}
      onClose={toggleDrawer("right", false)}
    >
      <div className="h-full bg-white shadow-xl w-96 md:w-cart">
        <button
          onClick={toggleDrawer("right", false)}
          className="absolute text-lg font-bold top-4 right-4"
        >
          X
        </button>
        {cart.line_items.length > 0 && (
          <div className="p-4">
            <h3 className="mb-2 text-lg font-bold"> Panier </h3>
            <ul className="list-none">
              {cart.line_items.map((item) => (
                <CartProduct item={item} />
              ))}
            </ul>

            <div className="pt-4 mt-6 border-t border-gray-400">
              <div className="flex items-center justify-between">
                <div>Totale</div>
                <div className="font-bold">
                  {cart.subtotal.formatted_with_code}
                </div>
              </div>
            </div>
            <div className="pt-4 mt-6">
              <button className="w-full py-2 font-bold text-white rounded-lg bg-primary hover:bg-primary/90 focus:outline-none focus:shadow-outline-indigo">
                Commander
              </button>
            </div>
          </div>
        )}
        {cart.line_items.length == 0 && (
          <div className="flex flex-col items-center justify-center mt-20">
            <h3 className="text-lg font-bold">Panier vide</h3>
            <div className="mt-10 w-60 ">
              <img
                src="https://media4.giphy.com/media/3oKHWw5mrN2erWcJZC/giphy.gif?cid=ecf05e47kmlby71nqhvv8bvws1bxwd91i47yw4abwbv6is0s&rid=giphy.gif&ct=g"
                alt="a gif to tell clients to buy something"
              />
            </div>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default CartDrawer;
