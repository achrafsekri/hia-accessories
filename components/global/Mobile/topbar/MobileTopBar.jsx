import Menu from "./Menu";
import Link from "next/link";
import React from "react";
import SideCart from "../../cart/SideCart";
import SearchBar from "../../topBar/SearchBar";

const MobileTopBar = () => {
  return (
    <div className="flex items-center justify-between w-screen px-3 py-3 font-medium md:hidden">
      <i className="text-3xl font-bold font-Boska"> hia </i>
      <div className="flex items-center gap-5">
        <SearchBar />
        <SideCart />
        <Menu />
      </div>
    </div>
  );
};

export default MobileTopBar;
