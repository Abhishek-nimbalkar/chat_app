import { IChatUser, ISocket } from "interfaces";
import React, { useState } from "react";
import { Socket } from "socket.io-client";

const ChatFooter = ({ socket, users, userSelected }: { socket:Socket, users:any, userSelected:any }) => {
  const [message, setMessage] = useState("");

  // console.log("userSelected", userSelected);

  // const [toUser,setToUser]=useState<any>();
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({ userName: localStorage.getItem('userName'), message });
    // if (message.trim() && localStorage.getItem("userName")) {
    //   socket.emit("message", {
    //     text: message,
    //     name: localStorage.getItem("userName"),
    //     id: `${socket.id}${Math.random()}`,
    //     socketID: socket.id,
    //   });
    // }

    if (userSelected) {
      console.log("userSelected====", userSelected);
      console.log("users array in Chat Footer", users);

      const toUsers = users?.filter((ele: any) => {
        return ele.userName?.trim() === userSelected?.trim();
        // setToUser(ele)
      });
      const toUser = toUsers[0];
      console.log("toUser ===", toUser.userID.trim());
      socket.emit("private message", {
        message,
        to: toUser.userID,
      });
      toUser.messages.push({
        message,
        fromSelf: true,
      });
    }
    setMessage("");
  };
  return (
    <>
      {userSelected ? (
        <div className="chat__footer">
          <form className="form" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Write message"
              className="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="sendBtn">SEND</button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default ChatFooter;
