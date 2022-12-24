import React, { useEffect } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import commerce from "../../../lib/commerce";
import Product from "./Product";

const Category = ({ category }) => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data: products } = await commerce.products.list({
        category_id: [category],
        limit: 6,
      });
      setProducts(products);
      setLoading(false);
    };
    fetchProducts();
  }, [category]);
  return (
    <Tab.Panel>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {!loading &&
          products &&
          products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
      </div>
    </Tab.Panel>
  );
};

export default Category;
