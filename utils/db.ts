import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

export const conn = async() => {
  try {
    const connect = await mongoose.connect(URI as string, { maxPoolSize: 10 });
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log('Error connecting to database:', error);
  }
}
