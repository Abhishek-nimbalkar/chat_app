require('dotenv').config()
const express = require('express');
const app=express();
const fs=require('fs');
const jwt = require('jsonwebtoken');

const user=require("./routes/user/userRoutes");
const post=require("./routes/posts/postRoutes");

app.use(express.json());

// console.log('process.env.', process.env.JWT_SECRET_KEY)


const port=3000;

app.use("/users",user);
app.use("/posts",post);

app.listen(port,()=>{
    console.log("Server Started SuccessFully ");
})