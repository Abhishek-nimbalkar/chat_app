import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    token: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 300,// this is the expiry time in seconds
    },
  });
export default mongoose.model("Tokens", tokenSchema);
  