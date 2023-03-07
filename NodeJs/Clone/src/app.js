const express = require('express');
const app=express();
const user=require("./routes/User/userRoutes");
app.use(express.json());



const port=3000;

app.use("/user",user)

app.listen(port,()=>{
    console.log("Server Started SuccessFully ");
})