import mongoose from "mongoose";

export async function mongooseConnect() {
  const uri = process.env.MONGODB_URI;
  return mongoose.connect(uri);
}


