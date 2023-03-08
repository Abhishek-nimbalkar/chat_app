const express = require('express');
const app=express();
const fs=require('fs')

const user=require("./routes/user/userRoutes");
const post=require("./routes/posts/postRoutes");

app.use(express.json());



const port=3000;

app.use("/users",user);
app.use("/posts",post);

app.listen(port,()=>{
    console.log("Server Started SuccessFully ");
})