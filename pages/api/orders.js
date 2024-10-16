import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  await mongooseConnect(); // Connect to the database

  try {
    // Fetch orders for the logged-in user based on userId or email
    const orders = await Order.find({ userId: session.user.id }).sort({
      createdAt: -1,
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
}
