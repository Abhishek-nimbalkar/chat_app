import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { ChatWrapper } from "style/components/ChatStyle";
import getUser from "utils/getUser";
import useGetData from "hooks";
import ChatBar from "components/Chat/ChatBar";
import ChatBody from "components/Chat/ChatBody";

const socket: Socket = io("http://localhost:5001", { autoConnect: false });


const Chat = () => {

//   const { isLoading, data } = useGetData("/users");
//   if (!isLoading) {
//     const users = data?.data?.map((ele: any) => {
//       return ele.userName;
//     });
//     console.log(users);
//   }





  return (
    <>
      <ChatWrapper>
        <ChatBar socket={socket} />
        <ChatBody />
      </ChatWrapper>
    </>
  );
};

export default Chat;
