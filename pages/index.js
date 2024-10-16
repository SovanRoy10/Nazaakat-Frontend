import Hero from "@/components/Hero";
import TextGoing from "@/components/TextGoing";
import Products from "@/components/Products";

import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

import Loader from "@/components/Loader";
import { useState,useEffect } from "react";


export default function Home({ featuredProduct, popularProducts }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); 
  }, []);

  if(loading) return <div className="flex justify-center mt-16"><Loader/></div>
  
  return (
    <>
      <Hero product={featuredProduct} />
      <TextGoing />
      <Products products={popularProducts} />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();

  const featuredProduct = await Product.findOne().skip(1);

  const featuredProducts = await Product.find({}, null, {
    sort: { _id: 1 },
    limit: 6,
  });

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      popularProducts: JSON.parse(JSON.stringify(featuredProducts)),
    },
  };
}
