// require('dotenv').config({ path: './env'})
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config();

connectDB();







// ;( async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// })();