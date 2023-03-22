import mongoose from "mongoose";

export async function connect() {
  try {
    // await mongoose.connect("mongodb+srv://Abhishek:Abhishek2023@atlascluster.ifyowmc.mongodb.net/?retryWrites=true&w=majority/blogApp");
    await mongoose.connect("mongodb://127.0.0.1:27017/blogApp")
    console.log("Database connected");
  } catch (err) {
    // console.error(err);
    throw new Error ("Db not connected");
  }
}

