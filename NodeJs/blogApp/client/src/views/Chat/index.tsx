import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { ChatLeft, ChatRight, ChatWrapper } from "style/components/ChatStyle";
import getUser from "utils/getUser";
import useGetData from "hooks";
import ChatBar from "components/Chat/ChatBar";
import ChatBody from "components/Chat/ChatBody";
import jwt_decode from "jwt-decode";
import ChatFooter from "components/Chat/ChatFooter";

const socket: Socket = io("http://localhost:5001", { autoConnect: false });

const Chat = () => {
  // const [usernameAlreadySelected, setAlredy] = useState(true);
  const [users, setUsers] = useState<any>();
  const [userName, setUserName] = useState<any>();
  const [userSelected, setSelectUser] = useState<string>();
  // socket.on("connect_error", (err) => {
  //   if (err.message === "invalid username") {
  //     setAlredy(false);
  //   }
  // });

  const token: any = localStorage.getItem("token");
  var decoded: any = jwt_decode(token);

  useEffect(() => {
    getUser("/users/getUser/" + decoded?.emailId).then((data) => {
      setUserName(data.user.userName);
    });
    return () => {
      socket.off("connect_error");
    };
  }, []);

  // console.log(userName);
  if (userName) {
    socket.auth = { userName };
    socket.connect();
  }

  // socket.on("connect_error", (err) => {
  //   if (err.message === "invalid username") {
  //     setAlredy(false);
  //   }
  // });

  socket.on("users", (users) => {
    users.forEach((user: any) => {
      user.self = user.userID === socket.id;
      // initReactiveProperties(user);
    });

    socket.on("user connected", (user) => {
      // initReactiveProperties(user);
      users.push(user);
    });
    // to listen any event
    socket.onAny((event, ...args) => {
      console.log(event, args);
    });

    setUsers(users);
    console.log("users from server", users);
  });
  socket.on("connect", () => {
    users?.forEach((user: any) => {
      if (user.self) {
        user.connected = true;
      }
    });
  });

  socket.on("disconnect", () => {
    users?.forEach((user: any) => {
      if (user.self) {
        user.connected = false;
      }
    });
  });
  socket.on("private message", ({ message, from }) => {
    // users.forEach((user: any) => {
    //   if (user.userID.trim() === from.trim()) {
    //     user.message.push({ message, fromSelf: false });
    //     if (user.userName !== userSelected) {
    //       user.hasNewMessages = true;
    //     }
    //     return;
    //   }
    // });
    console.log("users are before",users);
    
    for (let i = 0; i < users?.length; i++) {
      const user: any = users[i];
      if (user?.userID?.trim() === from?.trim()) {
        user.messages.push({
          message,
          fromSelf: false,
        });
        if (user.userName !== userSelected) {
          user.hasNewMessages = true;
        }
        console.log(user);

        break;
      }
    }
  });

  return (
    <>
      <ChatWrapper>
        <ChatLeft>
          <ChatBar socket={socket} setSelectUser={setSelectUser} />
        </ChatLeft>

        <ChatRight>
          <ChatBody socket={socket} />
          <ChatFooter
            socket={socket}
            userSelected={userSelected}
            users={users}
          />
        </ChatRight>
      </ChatWrapper>
    </>
  );
};

export default Chat;
