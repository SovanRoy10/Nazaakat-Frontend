import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: false,
      unique: true, // Ensure that orderId is unique
    },
    line_items: Object,
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    phoneNumber: Number,
    paid: {
      type: Boolean,
      default: false, // Default to false if not paid
    },
    paymentId: {
      type: String,
      required: false, // This can be optional based on your logic
    },
  },
  { timestamps: true }
);

export const Order =
  mongoose.models?.Order || mongoose.model("Order", orderSchema);
