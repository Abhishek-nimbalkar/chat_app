import React, { useEffect, useState, useRef } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IMessage, ISocket, IUseRef } from "../../interfaces";

export const newUserNotify = (user:string) => {
  // console.log("Click");
  
  // console.log("Hello");
  
  toast.success(user+" Has Joined the Chat ", {
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

  // console.log("Hello");
  if(user!==null){
  toast.success(user+" Has Left the Chat ", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
};

const ChatPage = ({ socket }:ISocket) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [typingStatus,setTypingStatus]=useState('');
  const [typingCheck,setTypingCheck]=useState(false);


  const lastMessageRef:IUseRef=useRef(null);
  // const isTyping:IUseRef=useRef(null);

  useEffect(() => {
    socket.on('messageResponse', (data:IMessage) => setMessages([...messages, data]));
  }, [socket, messages]);
  useEffect(()=>{
    lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
  },[messages])
  useEffect(()=>{
    socket.on('typingResponse',(data)=>{
      setTypingStatus(data)
    })
  },[socket])
  useEffect(()=>{
    socket.on('isTypingResponse',(data)=>{
      setTypingCheck(data)
    })
  },[socket])
  
  return (
    <>
      <ToastContainer />
      <div className="chat">
        <ChatBar socket={socket} />
        <div className="chat__main">
          <ChatBody messages={messages} lastMessageRef={lastMessageRef} typingStatus={typingStatus} typingCheck={typingCheck}/>
          <ChatFooter socket={socket} setTypingCheck={setTypingCheck}/>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
