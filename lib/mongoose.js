import mongoose from "mongoose";

export async function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  const uri = process.env.MONGODB_URI;
  return mongoose.connect(uri);
}
