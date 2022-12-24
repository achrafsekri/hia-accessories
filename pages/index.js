import commerce from "../lib/commerce";
import Layout from "../components/global/layout";
import Link from "next/link";
import Header from "../components/pages/Home/Header";
import Products from "../components/pages/Home/Products";
export default function Home({ merchant, categories, products }) {
  return (
    <Layout className="bg-red-500">
      <Header />
      <Products products={products} categories={categories} />
      {/* <Link href={`/products/${products[0].permalink}`} >product</Link> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
    revalidate: 60,
  };
}
