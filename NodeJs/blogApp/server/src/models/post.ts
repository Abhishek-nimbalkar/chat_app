import { Ipost } from "interfaces/postInterface";
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userEmail:String,
    title:{type:String,required:[true,"Tile should be there"],unique:[true,"The Title of the post should be unique"]},
    body:{type:String,required:[true,"Body Should be there"]},
    images:{type:Array,required:[false,"Img url should be there"]},
    comments:[{type:Object}],
    likes:[{type:Object}]
});

export default mongoose.model("Posts", postSchema);