import React, { useState } from "react";
import { Snackbar, SnackbarContent, Slide } from "@mui/material";
import { BsBag } from "react-icons/bs";
import CartDrawer from "./cart/CartDrawer";
const SnackBar = ({ open, setOpen }) => {
  const [state, setState] = useState({
    right: false,
  });

  const handleClose = () => {
    setOpen(false);
  };

  function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const handleOpenCart = () => {
    console.log("open cart");
    setOpen(false);
    toggleDrawer("right", true);
    console.log("opened");
  };

  return (
    <>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        TransitionComponent={TransitionUp}
      >
        <SnackbarContent
          className="px-4 text-white bg-primary"
          message="Produit ajouté au panier avec succès"
          action={
            <button
              className="px-2 py-1 text-white bg-primary"
              onClick={toggleDrawer("right", true)}
            >
              <span className="flex items-center gap-2 hover:underline">
                Voir le panier
                <BsBag />
              </span>
            </button>
          }
        ></SnackbarContent>
      </Snackbar>
      <CartDrawer toggleDrawer={toggleDrawer} state={state} />
    </>
  );
};

export default SnackBar;
