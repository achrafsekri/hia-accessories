import React from "react";
import { Tab } from "@headlessui/react";
import Category from "./Category";
import AllCategory from "./AllCategory";

const Products = ({ products, categories }) => {
  console.log("categories", categories);
  return (
    <div className="container px-4 py-2 mx-auto mt-10 space-y-6 md:py-4 max-w-7xl">
      <h2 className="mb-5 text-3xl font-bold tracking-wider font-Boska">
        La collection
      </h2>
      <Tab.Group>
        <Tab.List className="flex gap-4 mb-10 text-sm font-medium lg:font-semibold md:gap-4 lg:gap-8 md:text-xl ">
          <Tab
            className={({ selected }) =>
              selected ? " border-b-2 border-secondary focus:outline-none" : ""
            }
          >
            Tous
          </Tab>
          {categories.map((category, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                selected
                  ? " border-b-2 border-secondary focus:outline-none"
                  : ""
              }
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {/* all page */}
          <AllCategory products={products} />
          {/* categories pages */}
          {categories.map((category, index) => (
            <Category key={index} category={category.id} />
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Products;
