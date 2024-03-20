import Hero from "@/components/Hero";
import TextGoing from "@/components/TextGoing";
import Products from "@/components/Products";

import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function Home({ featuredProduct, popularProducts }) {
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

  const featureId = "65f9338d60793948ae13746b";
  const featuredProduct = await Product.findById(featureId);
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
