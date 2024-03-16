import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

export const conn = async() => {
  try {
    const connect = mongoose.connect(URI as string);
    console.log(`MongoDB connected: ${(await connect).connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
