import crypto from "crypto"
import { findSession } from "../session";
const randomId = () => crypto.randomBytes(8).toString("hex");


const middlewareController=(socket: any, next:any) => {
    const sessionID = socket.handshake.auth.sessionID;
    if (sessionID) {
      const session = findSession(sessionID);
      if (session) {
        socket.sessionID = sessionID;
        socket.userID = session.userID;
        socket.username = session.username;
        return next();
      }
    }
  
    const userName = socket.handshake.auth.userName;
    if (!userName) {
      return next(new Error("invalid userName"));
    }
    socket.sessionID = randomId();
    socket.userID = randomId();
    socket.userName = userName;
    next();
  }

  export {middlewareController}