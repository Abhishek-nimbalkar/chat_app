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
io.use((socket: any, next) => {
  const userName = socket.handshake.auth.userName;
  if (!userName) {
    return next(new Error("invalid userName"));
  }
  socket.userName = userName;
  next();
});

io.on("connection", (socket: any) => {
  console.log(`🌪: ${socket.id} user just connected!`);

  const users: any = [];
  for (let [id, socket] of io.of("/").sockets as any) {
    users.push({
      userID: id,
      username: socket?.userName,
    });
  }
  socket.emit("users", users);

  // notify existing users
  socket.broadcast.emit("user connected", {
    userID: socket.id,
    username: socket.username,
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
