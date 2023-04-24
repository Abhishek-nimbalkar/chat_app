import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { ChatWrapper } from "style/components/ChatStyle";
import getUser from "utils/getUser";
import useGetData from "hooks";
import ChatBar from "components/Chat/ChatBar";
import ChatBody from "components/Chat/ChatBody";
import jwt_decode from "jwt-decode";
import ChatFooter from "components/Chat/ChatFooter";

const socket: Socket = io("http://localhost:5001", { autoConnect: false });

const Chat = () => {
  const [usernameAlreadySelected, setAlredy] = useState(true);
  const [userName,setUserName]=useState<any>();
  socket.on("connect_error", (err) => {
    if (err.message === "invalid username") {
      setAlredy(false);
    }
  });

const token:any=localStorage.getItem("token")
var decoded:any = jwt_decode(token);

useEffect(()=>{
getUser("/users/getUser/"+decoded?.emailId).then((data)=>{
  setUserName(data.user.userName);
})
return()=>{
  socket.off("connect_error");
}

},[])
 
// console.log(userName);


  socket.connect();
  socket.auth = { userName };
  socket.on("connect_error", (err) => {
    if (err.message === "invalid username") {
      setAlredy(false)
    }
  });

  socket.on("users", (users) => {
    users.forEach((user:any) => {
      user.self = user.userID === socket.id;
      // initReactiveProperties(user);
    });

    socket.on("user connected", (user) => {
      // initReactiveProperties(user);
      users.push(user);
    });
    console.log(users);
    
    // put the current user first, and then sort by username
    // this.users = users.sort((a, b) => {
    //   if (a.self) return -1;
    //   if (b.self) return 1;
    //   if (a.username < b.username) return -1;
    //   return a.username > b.username ? 1 : 0;
    // });
  });

  return (
    <>
      <ChatWrapper>
        <ChatBar socket={socket} />
        <ChatBody />
        <ChatFooter />
      </ChatWrapper>
    </>
  );
};

export default Chat;
