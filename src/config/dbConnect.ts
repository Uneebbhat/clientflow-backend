import mongoose from "mongoose";
import { MONGO_URI } from "./constants";

const MONGODB_URI = MONGO_URI as string;

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`Connection established: ${conn.connection.host}`);
  } catch (e: any) {
    console.log(`Error connecting to database: ${e.message}`);
    throw new Error(`Database connection error: ${e.message}`);
  }
};

export default dbConnect;
