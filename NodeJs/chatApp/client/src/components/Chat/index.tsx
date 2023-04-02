import React, { useEffect, useState } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IMessage, ISocket } from "../../interfaces";

export const newUserNotify = (user:string) => {
  // console.log("Click");
  
  // console.log("Hello");
  
  toast.success(user+"Has Joined the Chat ", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export const leftUserNotify = (user:string) => {
  // console.log("Click");
  
  // console.log("Hello");
  
  toast.success(user+"Has Left the Chat ", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};




const ChatPage = ({ socket }:ISocket) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    socket.on('messageResponse', (data:IMessage) => setMessages([...messages, data]));
  }, [socket, messages]);

  
  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      {/* Same as */}
      <ToastContainer />
      <div className="chat">
        <ChatBar socket={socket} />
        <div className="chat__main">
          <ChatBody messages={messages} />
          <ChatFooter socket={socket} />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
