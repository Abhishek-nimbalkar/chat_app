import { Ipost } from "interfaces/postInterface";
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userEmail:String,
    title:String,
    body:String,
    img:String,
    comments:[{type:Object}],
    likes:[{type:Object}]
});

export default mongoose.model("Posts", postSchema);