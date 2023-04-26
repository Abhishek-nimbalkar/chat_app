import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

//MiddleWare
//On the server-side, we register a middleware which checks the username and allows the connection
io.use((socket: any, next) => {
  const userName = socket.handshake.auth.userName;
  if (!userName) {
    return next(new Error("invalid userName"));
  }
  socket.userName = userName;
  next();
});
// On Connection
io.on("connection", (socket: any) => {
  console.log(`🌪: ${socket.id} user just connected!`);

  const users: any = {};
  for (let [id, socket] of io.of("/").sockets as any) {
    console.log('for loop in server',socket.id)
    const user=socket.userName;
    users[user]={
      userID: id,
      userName: socket.userName,
      messages: [],
      connected: false,
      hasNewMessages: false,
    }
  }
  // console.log(users);
  
  socket.emit("users", users);

  // notify existing users
  socket.broadcast.emit("user connected", {
    userID: socket.id,
    userName: socket.userName,
  });
  // Private message send to perticular message
  socket.on("private message", ({ message, to }: any) => {
    console.log("to ", to);
    const fromId = socket.id;

    socket.to(to).emit("private message", {
      message,
      from: fromId,
    });
    console.log("message send by", socket.id);
  });

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
    socket.disconnect();
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live");
});

httpServer.listen(5001, () => {
  console.log("Server has started on http://localhost:5001");
});
