import mongoose from "mongoose";

export async function connect() {
  // try {
  //   // await mongoose.connect("mongodb+srv://Abhishek:Abhishek2023@atlascluster.ifyowmc.mongodb.net/?retryWrites=true&w=majority/blogApp");
  //   await mongoose.connect("mongodbjghjh://127.0.0.1:27017/blogApp")
  //   console.log("Database connected");
  // } catch (err) {
  //   // console.error(err);
  //   throw new Error ("Mongoose connection error");
  // }
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blogApp");
    
    console.log("Database connected");
  } catch (err) {
    // console.log(err);
    
    throw new Error("Mongoose connection error");
  }
}

