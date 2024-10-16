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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json("Only POST method is allowed.");
  }

  const { firstName, lastName, address, city, state, zip, phoneNumber, products, email } = req.body;

  // Validate input data
  if (!firstName || !lastName || !address || !city || !state || !zip || !phoneNumber || !products || !email) {
    return res.status(400).json({ error: "All fields are required." });
  }

  await mongooseConnect();

  const uniqueIds = [...new Set(products)];
  
  // Fetch product details for unique IDs
  const productInfos = await Product.find({ _id: uniqueIds });

  let totalAmount = 0;

  const line_items = productInfos.map((productInfo) => {
    const quantity = products.filter((id) => id === productInfo._id.toString()).length;

    if (quantity > 0) {
      const amountForThisProduct = productInfo.price * quantity;
      totalAmount += amountForThisProduct;

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
    }
    return null; // Skip if quantity is zero
  }).filter(Boolean); // Filter out null values

  // Create the order in the database
 // Step 1: Create the Order document in MongoDB without orderId initially
const orderDoc = await Order.create({
  orderId: `temp_${new Date().getTime()}`,
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

// Step 2: Create a Razorpay order
const options = {
  amount: totalAmount * 100, // Razorpay expects the amount in paise
  currency: "INR",
  receipt: `order_${orderDoc._id}`, // Use the MongoDB _id as receipt
};

try {
  // Step 3: Generate a Razorpay order
  const razorpayOrder = await razorpay.orders.create(options);

  // Step 4: Update the MongoDB Order document with the Razorpay orderId
  orderDoc.orderId = razorpayOrder.id; // Assign Razorpay orderId to the orderDoc
  await orderDoc.save(); // Explicitly save the updated document to MongoDB

  // Step 5: Send the Razorpay order details to the frontend
  res.json({
    orderId: razorpayOrder.id, // Use Razorpay orderId
    orderDocId: orderDoc._id, // MongoDB _id
    amount: totalAmount,
    currency: options.currency,
  });
} catch (error) {
  console.error("Razorpay Error:", error);
  res.status(500).json({ error: "Something went wrong with Razorpay." });
}



}
