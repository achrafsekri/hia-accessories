import commerce from "../lib/commerce";
import Layout from "../components/global/layout";
export default function Home({ merchant, categories, products }) {
  console.log(products);
  return <Layout className="bg-red-500">efe</Layout>;
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
