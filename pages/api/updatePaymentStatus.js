// import { mongooseConnect } from "@/lib/mongoose";
// import { Order } from "@/models/Order";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(400).json("Only POST method is allowed.");
//   }

//   const { orderId, paymentId, status } = req.body;

//   // Validate input data
//   if (!orderId || !paymentId || !status) {
//     return res.status(400).json({ error: "All fields are required." });
//   }

//   await mongooseConnect();

//   try {
//     // Update the order in the database
//     const paidStatus = status === "paid"; // Determine the paid status based on the incoming status
//     const updateResponse = await Order.updateOne(
//       { orderId }, // Using orderId for querying
//       { paid: paidStatus, paymentId } // Update paid status and paymentId
//     );

//     // Check if the update was successful
//     if (updateResponse.modifiedCount > 0) {
//       res.status(200).json({ message: "Order updated successfully." });
//     } else {
//       console.error(`Order not found for orderId: ${orderId}`); // Log the not found orderId for debugging
//       res.status(404).json({ error: "Order not found." });
//     }
//   } catch (error) {
//     console.error("Error updating order:", error);
//     res.status(500).json({ error: "Failed to update order status." });
//   }
// }


import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json("Only POST method is allowed.");
  }

  const { orderId, paymentId, status } = req.body;

  // Validate input data
  if (!orderId || !paymentId || !status) {
    return res.status(400).json({ error: "All fields are required." });
  }

  await mongooseConnect();

  try {
    // Determine the paid status based on the incoming status
    const paidStatus = status === "paid";

    // Find the order by orderId
    const order = await Order.findOne({ orderId });
    
    // Check if the order exists
    if (!order) {
      console.error(`Order not found for orderId: ${orderId}`); // Log for debugging
      return res.status(404).json({ error: "Order not found." });
    }

    // Update the order with the new payment information
    order.paid = paidStatus;
    order.paymentId = paymentId;
    
    await order.save(); // Save the updated order

    res.status(200).json({ message: "Order updated successfully." });
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ error: "Failed to update order status." });
  }
}
