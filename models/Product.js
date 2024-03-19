import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    details: {
      type: String,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    brand: {
      type: String,
    },
    colors: {
      type: String,
    },
    gender: {
      type: String,
    },
    sizes: {
      type: String,
    },
    category: { type: mongoose.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
