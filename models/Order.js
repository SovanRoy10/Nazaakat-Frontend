import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    line_items: Object,
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    phoneNumber: Number,
    paid: Boolean,
  },
  { timestamps: true }
);

export const Order =
  mongoose.models?.Order || mongoose.model("Order", orderSchema);
