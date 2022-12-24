import React from "react";

const Discount = () => {
  return (
    <div className="mt-6">
      <h2 className="font-semibold text-md text-mainText">Code de réduction</h2>
      <div className="relative w-full mt-4 focus:ring-blue focus:border-blue">
        <input
          type="text"
          className="w-full h-10 px-4 text-sm font-medium border rounded-lg focus:ring-blue focus:border-blue text-mainText bg-paperGray border-border"
          placeholder="Code de réduction"
        />
        <button className="absolute h-10 text-sm font-medium transition duration-200 rounded-lg focus:text-blue-800 focus-within:scale-110 right-2 text-blue ">
          Appliquer
        </button>
      </div>
    </div>
  );
};

export default Discount;
