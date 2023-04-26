import { ISocket } from "interfaces";
import React, { useEffect } from "react";

const ChatBody = ({ socket, userSelected }: any) => {
  const handleLeaveChat = () => {};

  return (
    <>
      {/*This shows messages sent from you*/}
      <div className="message__container">
        <h3>{userSelected}</h3>
        {/* {messages.map((message) =>
          message.name === localStorage.getItem('userName') ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )} */}

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
