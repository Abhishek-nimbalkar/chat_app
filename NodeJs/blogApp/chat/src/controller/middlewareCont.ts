import crypto from "crypto";
import { RedisSessionStore } from "../store/session";
import { RedisMessageStore } from "../store/message";
import Redis from "ioredis";

const randomId = () => crypto.randomBytes(8).toString("hex");
const redisClient = new Redis();
export const sessionStore = new RedisSessionStore(redisClient);
export const messageStore = new RedisMessageStore(redisClient);

// console.log('11 of mid redisClient========', redisClient)
export const pubClient = redisClient;
export const subClient = pubClient.duplicate();
const middlewareController = async (socket: any, next: any) => {
  const sessionID = socket.handshake.auth.sessionID;


  // console.log("sessionID of user connected==", sessionID);

  if (sessionID) {
    const session = await sessionStore.findSession(sessionID);
    // console.log(!session === undefined);

    if (session) {
      socket.sessionID = sessionID;
      console.log("Session ID of user for Existing Session",sessionID);
      socket.userID = session.userID;
      socket.userName = session.userName;
      return next();
    }
  }

  const userName = socket.handshake.auth.userName;
  if (!userName) {
    console.log("no User name Found");
    return next(new Error("invalid userName"));
  }
  socket.sessionID = randomId();
  socket.userID = randomId();
  socket.userName = userName;
  next();
};

export { middlewareController };
