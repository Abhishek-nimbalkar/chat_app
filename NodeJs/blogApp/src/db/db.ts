import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb+srv://Abhishek:Abhishek2023@atlascluster.ifyowmc.mongodb.net/?retryWrites=true&w=majority/blog/Users");
    console.log("Database connected");
  } catch (err) {
    console.error(err);
  }
}

