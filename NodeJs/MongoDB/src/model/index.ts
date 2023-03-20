import mongoose from "mongoose"

const mongoSchema=new mongoose.Schema({
item:{
    name:String,
    code:String
},
qty:Number,
tags:Array
});

export default mongoose.model("Mongo",mongoSchema)