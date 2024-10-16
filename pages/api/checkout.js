// import { mongooseConnect } from "@/lib/mongoose";
// import { Product } from "@/models/Product";
// import { Order } from "@/models/Order";

// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET);

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     res.json("Should be a POST request");
//     return;
//   }

//   const {
//     firstName,
//     lastName,
//     address,
//     city,
//     state,
//     zip,
//     phoneNumber,
//     products,
//     email,
//   } = req.body;

//   await mongooseConnect();

//   const productIds = products;
//   const uniqueIds = [...new Set(productIds)];

//   const productInfos = await Product.find({ _id: uniqueIds });

//   let line_items = [];
//   for (const productId of uniqueIds) {
//     const productInfo = productInfos.find(
//       (info) => info._id.toString() === productId
//     );

//     const quantity = productIds.filter((id) => id === productId).length || 0;

//     if (quantity > 0 && productInfo) {
//       line_items.push({
//         quantity,
//         price_data: {
//           currency: "INR",
//           product_data: { name: productInfo.title },
//           unit_amount: productInfo.price * 100,
//         },
//       });
//     }
//   }

//   const orderDoc = await Order.create({
//     line_items,
//     firstName,
//     lastName,
//     address,
//     city,
//     state,
//     zip,
//     phoneNumber,
//     email,
//     paid: false,
//   });

//   //   console.log(orderDoc)

//   const session = await stripe.checkout.sessions.create({
//     line_items,
//     mode: "payment",
//     customer_email: email,
//     shipping_address_collection: {
//       allowed_countries: ["IN"], // Only allow shipping to India
//     },
//     success_url: process.env.PUBLIC_URL + "/cart?success=1",
//     cancel_url: process.env.PUBLIC_URL + "/cart?canceled=1",
//     metadata: { orderId: orderDoc._id.toString(), test: "ok" },
//   });
//   // Just Use an Indian Stripe test card India (IN) 4000003560000008 Visa

//   res.json({
//     url: session.url,
//   });
// }



import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Order } from "@/models/Order";
import Razorpay from "razorpay";

// Initialize Razorpay with environment variables
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

console.log("Razorpay Key ID:", process.env.RAZORPAY_KEY_ID);
console.log("Razorpay Key Secret:", process.env.RAZORPAY_KEY_SECRET);


export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).json("Only POST method is allowed.");
    return;
  }

  const { firstName, lastName, address, city, state, zip, phoneNumber, products, email } = req.body;

  // console.log("Request Body:", req.body); // Log incoming request

  await mongooseConnect();

  const productIds = products;
  const uniqueIds = [...new Set(productIds)];

  // Fetch product details for unique IDs
  const productInfos = await Product.find({ _id: uniqueIds });

  // console.log("Product Info Retrieved:", productInfos); // Log fetched product info

  let totalAmount = 0;

  const line_items = productIds.map((productId) => {
    const productInfo = productInfos.find((p) => p._id.toString() === productId);
    const quantity = productIds.filter((id) => id === productId).length || 0;

    if (productInfo && quantity > 0) {
      const amountForThisProduct = productInfo.price * quantity; // Calculate total price for this product
      totalAmount += amountForThisProduct; // Update total amount

      return {
        quantity,
        price_data: {
          currency: "INR",
          product_data: {
            name: productInfo.title || "Unknown Product",
          },
          unit_amount: productInfo.price * 100, // Price in paise
        },
      };
    } else {
      console.error(`Product not found or quantity is zero for productId: ${productId}`, productInfo);
      return null; // Return null if productInfo is not found
    }
  }).filter(Boolean); // Filter out any undefined entries

  // console.log("Line Items:", line_items); // Log line items before creating order

  // Create the order in the database
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

  // Now, create a Razorpay order using the totalAmount
  const options = {
    amount: totalAmount * 100, // Razorpay expects the amount in paise (so multiply INR by 100)
    currency: "INR",
    receipt: `order_${orderDoc._id}`,
  };

  // console.log("Razorpay Options:", options); // Log options for Razorpay

  try {
    const order = await razorpay.orders.create(options);
    res.json({
      orderId: order.id,
      orderDocId: orderDoc._id,
      amount: totalAmount,
    });
  } catch (error) {
    console.error("Razorpay Error:", error);
    res.status(500).json({ error: "Something went wrong with Razorpay." });
  }
}
