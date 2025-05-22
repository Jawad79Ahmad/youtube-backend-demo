// require('dotenv').config({ path: './env'})
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
  path: './.env'
});

const PORT = process.env.PORT || 8000;

connectDB()
.then(() => {
  app.on("error", (error) => {
    console.log('ERROR !!!', error);
    throw error;
  })

  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
  })
})
.catch((err) => {
  console.log("MONGO DB connection failed !!!", err);
})





// ;( async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// })();