import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Order } from "@/models/Order";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("Should be a POST request");
    return;
  }

  const {
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    products,
    email,
  } = req.body;

  await mongooseConnect();

  const productIds = products;
  const uniqueIds = [...new Set(productIds)];

  const productInfos = await Product.find({ _id: uniqueIds });

  let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productInfos.find(
      (info) => info._id.toString() === productId
    );

    const quantity = productIds.filter((id) => id === productId).length || 0;

    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: "INR",
          product_data: { name: productInfo.title },
          unit_amount: productInfo.price * 100,
        },
      });
    }
  }

  const orderDoc = await Order.create({
    line_items,
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    email,
    paid: false,
  });

  //   console.log(orderDoc)

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer_email: email,
    shipping_address_collection: {
      allowed_countries: ["IN"], // Only allow shipping to India
    },
    success_url: process.env.PUBLIC_URL + "/cart?success=1",
    cancel_url: process.env.PUBLIC_URL + "/cart?canceled=1",
    metadata: { orderId: orderDoc._id.toString(), test: "ok" },
  });
  // Just Use an Indian Stripe test card India (IN) 4000003560000008 Visa

  res.json({
    url: session.url,
  });
}
