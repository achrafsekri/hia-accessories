import React, { useEffect } from "react";
import { Tab } from "@headlessui/react";
import Product from "./Product";

const AllCategory = ({ products }) => {
  return (
    <Tab.Panel>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {products &&
          products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
      </div>
    </Tab.Panel>
  );
};

export default AllCategory;
