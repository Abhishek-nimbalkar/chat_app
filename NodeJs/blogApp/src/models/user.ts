import { IUserSignUp } from "interfaces/userInterface";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  emailId: {type:String,required:[true,"Email is Required"]},
  userName: {type:String},
  phone: String,
  password:{type:String,required:[true,"password is Required"]},
  imgUrl:String
});

export default mongoose.model("Users", userSchema);