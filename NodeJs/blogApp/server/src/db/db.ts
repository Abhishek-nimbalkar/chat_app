import mongoose from "mongoose";


export async function connect() {
  // console.log(process.env.MongoAtlas_UserName);
  
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MongoAtlas_UserName}:${process.env.MongoAtlas_Password}@atlascluster.ifyowmc.mongodb.net/blogApp`);
    // await mongoose.connect("mongodbjghjh://127.0.0.1:27017/blogApp")
    console.log("Database connected");
  } catch (err) {
    // console.error(err);
    throw new Error ("Mongoose connection error");
  }
  // try {
  //   await mongoose.connect("mongodb://127.0.0.1:27017/blogApp");
    
  //   console.log("Database connected");
  // } catch (err) {
  //   // console.log(err);
    
  //   throw new Error("Mongoose connection error");
  // }
}

