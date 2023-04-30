import { ISocket } from "interfaces";
import React, { useEffect, useState } from "react";

const ChatBody = ({ socket, userSelected, users,messageEvent,setMessageEvent}: any) => {
  // const handleLeaveChat = () => {};
  const [messages, setMessages] = useState<any>();
  useEffect(() => {
    if (users && userSelected) {
      if (users[userSelected] !== undefined) {
        const messages = users[userSelected].messages;
        setMessages(messages);
        console.log("messages", messages, "of the user", userSelected);
      }

      // console.log(messages,userSelected);
    }
    // console.log('messageEvent before', messageEvent)
    setMessageEvent(false)
    // console.log('messageEvent after', messageEvent)
  },[userSelected, users, messageEvent, setMessageEvent]);

  return (
    <>
      {/*This shows messages sent from you*/}
      <div className="message__container">
        <h3 style={{position:"fixed",background:"white",width:"60%"}}>{userSelected}</h3>
        {messages?.map((message: any,key:number) =>
          message.fromSelf ? (
            <div className="message__chats" key={key}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p >{message.message}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={key}>
              <p>{userSelected}</p>
              <div className="message__recipient">
                <p key={key}>{message.message}</p>
              </div>
            </div>
          )
        )}

        {/*This is triggered when a user is typing*/}
        {/* <div className="message__status">
          <p  style={{opacity:typingCheck?1:0,transition:"all 0.1s ease-in-out"}} >{typingStatus} is Typing </p>
        </div>
        <div ref={lastMessageRef as React.RefObject<HTMLDivElement>} />  */}
      </div>
    </>
  );
};

export default ChatBody;
