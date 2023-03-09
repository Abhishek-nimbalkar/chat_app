import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  emailId: String,
  userName: String,
  phone: String,
  password:String
});

export default mongoose.model("User", userSchema);