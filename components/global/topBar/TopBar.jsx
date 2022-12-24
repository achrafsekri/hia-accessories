import Link from "next/link";
import React from "react";
import SideCart from "../cart/SideCart";
import SearchBar from "./SearchBar";

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

const TopBar = () => {
  return (
    <div className="container hidden px-4 py-3 mx-auto space-y-6 md:inline max-w-7xl">
      <div className="items-center justify-between w-full font-medium md:flex">
        <ul className="flex gap-4">
          {menuItems.map((item, index) => (
            <li key={index} className="relative mr-4 group">
              <Link href={item.link}>
                {item.name}
                <div className="absolute hidden w-full h-0.5 top-3 bg-primary group-hover:flex transition duration-300"></div>
              </Link>
            </li>
          ))}
        </ul>
        <i className="text-3xl font-bold font-Boska"> hia </i>
        <div className="flex items-center gap-4">
          <SearchBar />
          <SideCart />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
