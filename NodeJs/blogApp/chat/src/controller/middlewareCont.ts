import crypto from "crypto";
import { InMemorySessionStore } from "../session";
const randomId = () => crypto.randomBytes(8).toString("hex");

export const sessionStore = new InMemorySessionStore();

const middlewareController = (socket: any, next: any) => {
  const sessionID = socket.handshake.auth.sessionID;


  // console.log("sessionID of user connected==", sessionID);

  if (sessionID) {
    const session = sessionStore.findSession(sessionID);
    console.log(!session === undefined);

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
