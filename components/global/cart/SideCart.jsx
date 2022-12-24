import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import CartDrawer from "./CartDrawer";

const SideCart = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  return (
    <>
      <button
        onClick={toggleDrawer("right", true)}
        className="transition duration-300 scale-100 focus:scale-110"
      >
        <BsBag className="text-lg" />
      </button>
      <CartDrawer toggleDrawer={toggleDrawer} state={state} />
    </>
  );
};

export default SideCart;
