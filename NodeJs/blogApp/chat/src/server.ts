import express, { Request, Response } from "express";
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import {
  middlewareController,
  sessionStore,
  messageStore,
} from "./controller/middlewareCont";
import dotenv from "dotenv";
import {Redis} from "ioredis"
import { setupWorker } from "@socket.io/sticky";
dotenv.config({path: path.resolve(process.cwd(), `../.env`) });

const app = express();

app.use(cors());
const httpServer = createServer(app);
// Redis Client 
const RedisClient=new Redis();
const io:Server = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },

});

//MiddleWare
//On the server-side, we register a middleware which checks the username and allows the connection
io.use(middlewareController);

// On Connection
io.on("connection", (socket: any) => {
  console.log(`🌪: ${socket.id} user just connected!`);
  // console.log("Current Session on server Before", sessionStore.sessions);
  // persist session
  sessionStore.saveSession(socket.sessionID, {
    userID: socket.userID,
    userName: socket.userName,
    connected: true,
  });
  console.log(
    "Current Session on server After new user",
    sessionStore.sessions
  );
  // emit session details
  socket.emit("session", {
    sessionID: socket.sessionID,
    userID: socket.userID,
  });
  socket.join(socket.userID);
  //fetching existing users on server
  const users: any = {};
  const messagesPerUser = new Map();
  messageStore.findMessagesForUser(socket.userID).forEach((message: any) => {
    const { from, to } = message;
    const otherUser = socket.userID === from ? to : from;
    if (messagesPerUser.has(otherUser)) {
      messagesPerUser.get(otherUser).push(message);
    } else {
      messagesPerUser.set(otherUser, [message]);
    }
  });

  const UsersOnServer = sessionStore.sessions;
  // console.log("UsersOnServer",UsersOnServer);

  UsersOnServer?.forEach((session: any) => {
    const user = session.userName;
    // console.log(user);
    users[user] = {
      userID: session.userID,
      userName: session.userName,
      connected: session.connected,
      messages: messagesPerUser.get(session.userID) || [],
    };
    // users[(session.userName).trim()]={
    //   userID:socket.userID,
    //   // userName:socket.userName,
    //   // messages:[],
    //   // connected:false,
    //   // hasNewMessages: false
    // }
    // users[session.userName]={
    //   userID:socket.userID,
    //   userName:socket.userName,
    //   messages:[],
    //   connected:false,
    //   hasNewMessages: false,
    // };
  });
  console.log("users on Server", users);

  // for (let [id, socket] of io.of("/").sockets as any) {
  //   console.log("for loop in server", socket.sessionID);
  //   const user = socket.userName;
  //   users[user] = {
  //     userID: id,
  //     userName: socket.userName,
  //     messages: [],
  //     connected: false,
  //     hasNewMessages: false,
  //   };
  // }
  // console.log(users);

  socket.emit("users", users);

  // notify existing users
  socket.broadcast.emit("user connected", {
    userID: socket.userID,
    userName: socket.userName,
    messages: [],
  });
  // Private message send to perticular message
  socket.on("private message", ({ message, to }: any) => {
    const fromId = socket.userID;
    console.log("fromID======", fromId, "to======", to);
    const newMessage = {
      message,
      from: socket.userID,
      to,
    };
    socket.to(to).to(socket.userID).emit("private message", newMessage);
    messageStore.saveMessage(newMessage);
    // console.log("users message on server",messageStore.messages)
    // console.log("message send by", socket.id);
  });

  socket.on("disconnect", async () => {
    const matchingSockets = await io.in(socket.userID).allSockets();
    const isDisconnected = matchingSockets.size === 0;
    if (isDisconnected) {
      // notify other users
      socket.broadcast.emit("user disconnected", socket.userID);
      console.log("user discoonected === ", socket.userID);

      // update the connection status of the session
      sessionStore.saveSession(socket.sessionID, {
        userID: socket.userID,
        userName: socket.userName,
        connected: false,
      });
    }
    // socket.emit("users", users);
    // console.log("users on Server after disconnected",sessionStore.sessions);
    console.log("🔥: A user disconnected");
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live");
});

// httpServer.listen(process.env.CHAT_APP_PORT, () => {
//   console.log("Server has started on http://localhost:5001");
// });
setupWorker(io)
