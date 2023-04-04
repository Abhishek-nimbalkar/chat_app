import { IUserSignUp } from "interfaces/userInterface";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  emailId: {
    type: String,
    unique:true,
    required: [true, "Email is Required"],
    validate: {
      validator: (value:any) => {
        // Custom validation logic for email
        // Here is an example of checking if the email is valid using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      message: "Email address is not valid",
    },
  },
  userName: { type: String },
  phone: String,
  password: { type: String, required: [true, "password is Required"] },
  imgUrl: String,
});


export default mongoose.model("Users", userSchema);
