import Image from "next/image";
import React from "react";
import left from "../../../public/images/left.jpg";
import right from "../../../public/images/right.jpg";
const Header = () => {
  return (
    <div className="container py-2 mx-auto space-y-6 md:py-4 max-w-7xl">
      <div className="grid w-full h-full grid-cols-2 gap-4 px-4 py-10 rounded-lg md:grid-cols-3 lg:px-20 bg-paperGray">
        <div className="items-center justify-center hidden w-full h-full md:flex">
          <div className="relative w-full overflow-hidden rounded-lg h-96 bg-primary">
            <Image src={left} fill className="object-cover " />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full h-full gap-2 tracking-wider md:gap-4 md:items-center">
          <h1 className="text-2xl font-bold capitalize md:leading-8 md:text-4xl md:text-center font-Boska">
            Rester fidèle à vous-même
          </h1>
          <p className="leading-6 tracking-wide md:text-xl md:text-center">
            Découvrez les dernières tendances en accessoires pour femmes sur Hia
          </p>
          <button className="py-2 mt-2 text-sm font-bold text-white rounded-lg md:w-40 w-28 md:text-lg md:py-2 bg-secondary">
            Découvrir
          </button>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <div className="relative w-full overflow-hidden rounded-lg h-72 md:h-96 bg-primary">
            <Image src={right} fill className="object-cover " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
