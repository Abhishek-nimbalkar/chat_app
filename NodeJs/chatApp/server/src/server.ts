import express, { Request, Response } from "express";
import {Server} from "socket.io";
import http from "http"
import cors from "cors"
import { IUser } from "interfaces";

const Port=5000 || process.env.PORT;
const app=express();
// app.use(express.json());
app.use(cors());



const httpServer=http.createServer(app);
const SocketIO=new Server(httpServer,{
    cors:{
        origin:"*",
        methods:["GET","POST"],
    }
})
let users:IUser[]=[];
let Users:any={};
SocketIO.on('connection',(socket)=>{
    console.log(`🌪: ${socket.id} user just connected!`);

    socket.on("message",(data)=>{
        SocketIO.emit('messageResponse', data);
        
    })

    socket.on('typing',(data)=>socket.broadcast.emit('typingResponse',data));
    socket.on('isTyping',(data)=>socket.broadcast.emit('isTypingResponse',data))

    socket.on("newUser",(data:IUser)=>{
        let Id=data.socketID;
        let Name=data.userName;
        Users[Id]=Name;


        // Object.assign(Users, {key:value});
        users.push(data);
        // console.log(Users);
        
        SocketIO.emit("newUserAdd",data.userName)
        SocketIO.emit('newUserResponse', users);
    })
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
      users = users.filter((user:IUser) => user.socketID !== socket.id);
      SocketIO.emit("leftUser",Users[socket.id]);
      delete Users[socket.id];
    //   console.log(Users);
      
      SocketIO.emit('newUserResponse', users);
    //   console.log(socket.id);
      
      
    socket.disconnect();
    });
    
})


app.get("/",(req:Request,res:Response)=>{
    res.send("Hello World")
})

httpServer.listen(Port,()=>{
    console.log("Server has Started Successfully on http://localhost:"+Port);
    
})