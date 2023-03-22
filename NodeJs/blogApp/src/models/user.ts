import { IUserSignUp } from "interfaces/userInterface";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  emailId: String,
  userName: {type:String},
  phone: String,
  password:{type:String},
  imgUrl:String
});

export default mongoose.model("Users", userSchema);