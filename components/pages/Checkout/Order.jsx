import React from "react";
import Image from "next/image";
const Order = ({ product }) => {
  return (
    <div className="flex items-center w-full px-4 font-medium h-28">
      <div className="flex items-center w-full ">
        <div
          id="image"
          className="relative w-24 h-20 p-1 "
        >
          <div
            id="imageHolder"
            className="w-full h-full bg-white border rounded-lg border-border"
          ></div>
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-sm font-bold bg-white border rounded-lg border-border">3</span>
        </div>
        <div id="info" className="w-full px-6 py-3 text-md">
          <span className="flex justify-between">
            <h2 className="font-bold">Nike Air Zoom Pegasus 39</h2>
            <h3>$28.00</h3>
          </span>
          <div className="flex w-full gap-10 mt-4">
            <h3 className="text-textGray">
              Taille:<span className="ml-1 font-bold text-mainText">XL</span>
            </h3>
            <h3 className="text-textGray">
              Couleur:<span className="ml-1 font-bold text-mainText">Bleu</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
