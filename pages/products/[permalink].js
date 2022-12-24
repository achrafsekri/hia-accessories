import React from "react";
import AddToCartButton from "../../components/global/AddToCartButton";
import commerce from "../../lib/commerce";

const ProductPage = ({ product }) => {
  console.log(product);
  return (
    <div>
      <AddToCartButton item={product.id} quantity={2} />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}
export default ProductPage;
