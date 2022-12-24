import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import { Drawer } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
const menuItems = [
  {
    name: "Accueil",
    link: "/",
  },
  {
    name: "Produits",
    link: "/",
  },
  {
    name: "Hia",
    link: "/about",
  },
];

const Menu = () => {
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
        <AiOutlineMenu className="text-2xl" />
      </button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        <div className="w-screen h-screen">
          <button
            onClick={toggleDrawer("right", false)}
            className="absolute text-lg font-bold top-4 right-4"
          >
            X
          </button>
          <ul className="flex flex-col items-center justify-center w-full h-full gap-8 bg-slate-300">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-center text-3xl font-bold hover:text-secondary focus:text-secondary"
                onClick={toggleDrawer("right", false)}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default Menu;
