import express, { Request, Response } from "express";
import {Server} from "socket.io";
import http from "http"
import cors from "cors"

const Port=5000 || process.env.PORT;
const app=express();
// app.use(express.json());
app.use(cors())



const httpServer=http.createServer(app);
const SocketIO=new Server(httpServer,{
    cors:{
        origin:"*",
        methods:["GET","POST"],
    }
})

SocketIO.on('connection',(socket)=>{
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected')
    });
    
})


app.get("/",(req:Request,res:Response)=>{
    res.send("Hello World")
})

httpServer.listen(Port,()=>{
    console.log("Server has Started Successfully on http://localhost:"+Port);
    
})