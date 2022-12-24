import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../../global/AddToCartButton";
const Product = ({ product }) => {
  return (
    <div className="flex flex-col justify-center gap-4 overflow-hidden">
      <Link href={`/products/${product.permalink}`}>
        <div className="relative w-full overflow-hidden rounded-md h-72 md:h-96 lg:h-homeProduct">
          <Image
            src={product.image.url}
            width={product.image.width}
            height={product.image.height}
            alt={product.name}
            fill
            className="object-cover transition duration-300 hover:scale-105 "
          />
        </div>
      </Link>
      <div className="space-y-2">
        <Link href={`/products/${product.permalink}`}>
          <h3 className="text-base font-medium hover:opacity-90">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm font-medium ">
          {product.price.formatted_with_code}
        </p>
        <AddToCartButton
          className="text-sm font-semibold text-left hover:underline "
          item={product.id}
          quantity={1}
        >
          Ajouter au panier
        </AddToCartButton>
      </div>
    </div>
  );
};

export default Product;
