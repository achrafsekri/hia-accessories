import React from "react";
import QuantityControl from "./QuantityControl";
const CartProduct = ({ item }) => {
  return (
    <li className="mb-4">
      <div className="flex items-center">
        <div className="w-8 h-8 mr-4 bg-gray-500 rounded-full"></div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-700">{item.name}</h4>
          <div className="text-gray-600">
            {item.line_total.formatted_with_symbol}
          </div>
        </div>
        <QuantityControl item={item} />
      </div>
    </li>
  );
};

export default CartProduct;
