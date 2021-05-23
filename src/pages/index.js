import Head from "next/head";
import ProductFeed from "../app/ProductFeed";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home({ products }) {
  return (
    <div bg-grey-100>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto">

        {/* Banner */}
        <Banner />

        {/* product Feed */}
        <ProductFeed products={products} />

      </main>


      {/* header*/}
      {/* banner */}
    </div>
  );
}

// we need to export our page a an async page..we can achieve that using next.js, if we export our page as an async, this tells next.js that this is no longer a static page, it needs to have that middle server step
// this means next.js should perform some calculation b4 delivering it to the user

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json());
  return {
    props: {
      products,
    },
  };

}
