import React, { useEffect, useState } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { Socket } from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IMessage, ISocket } from "../../interfaces";

export const notify = () => {
  // console.log("Click");
  
  // console.log("Hello");
  
  toast.success("You Successfully log in ", {
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
