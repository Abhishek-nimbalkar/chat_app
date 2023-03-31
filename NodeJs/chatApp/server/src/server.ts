import express, { Request, Response } from "express";
import {Server} from "socket.io";
import http from "http"
import cors from "cors"
import { IUser } from "interfaces";

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
let users:IUser[]=[];
SocketIO.on('connection',(socket)=>{
    console.log(`🌪: ${socket.id} user just connected!`);

    socket.on("message",(data)=>{
        SocketIO.emit('messageResponse', data);
        
    })
    socket.on("newUser",(data)=>{
        users.push(data);
        SocketIO.emit('newUserResponse', users);
    })
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
      users = users.filter((user:IUser) => user.socketID !== socket.id);
      SocketIO.emit('newUserResponse', users);console.log(socket.id);
      SocketIO.emit("leftUser",socket.id)
      
      socket.disconnect();

    });
    
})


app.get("/",(req:Request,res:Response)=>{
    res.send("Hello World")
})

httpServer.listen(Port,()=>{
    console.log("Server has Started Successfully on http://localhost:"+Port);
    
})