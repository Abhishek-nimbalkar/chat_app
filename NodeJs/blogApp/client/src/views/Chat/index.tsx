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
  const [messageEvent, setMessageEvent] = useState<boolean>(false);
  const [connect, setConnect] = useState<boolean>();
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
  useEffect(() => {
    if (userName) {
      socket.auth = { userName };
      socket.connect();
    }
  }, [userName]);

  // socket.on("connect_error", (err) => {
  //   if (err.message === "invalid username") {
  //     setAlredy(false);
  //   }
  // });
  useEffect(() => {
    socket.on("users", (users) => {
      // console.log('users.length emited by server', users)
      for (let i in users) {
        users[i].self = users[i].userID === socket.id;
      }
      setUsers(users);

      socket.on("user connected", (user) => {
        // initReactiveProperties(user);
        users[user.userName] = {
          userID: user.userID,
          userName: user.userName,
          messages: [],
          connected: false,
          hasNewMessages: false,
        };
        setConnect(true);
      });

      // to listen any event
      socket.onAny((event, ...args) => {
        console.log(event, args);
      });

      console.log("users from server", users);
    });
    
    
  }, []);

  // useEffect(()=>{
  //   socket.on("connect", () => {
  //     for (let i in users) {
  //       if (users[i].self) {
  //         users[i].connected = true;
  //       }
  //     }
  //   });
  
  //   socket.on("disconnect", () => {
  
  //     for (let i in users) {
  //       if (users[i].self) {         
  //         users[i].connected = false;
  //       }
  //     }
  //   });
  // },[users])
  

  useEffect(() => {
    socket.on("private message", ({ message, from }) => {
      setMessageEvent(true);
      // console.log(message, from);

      // console.log("USERS ", users);

      // console.log('from', from)
      if (users) {
        for (let i in users) {
          // console.log("users in private for loop", users[i]);
          // console.log("users ID", users[i].userName, "from ID", from);

          if (users[i].userID === from) {
            users[i].messages.push({
              message,
              fromSelf: false,
            });
            if (users[i].userName !== userSelected) {
              users[i].hasNewMessages = true;
            }

            break;
          }
          console.log("for loop of users in index.tsx");
        }
        console.log("users after updating message", users);
      }

      // console.log("users are after", users);
    });
  }, [users]);

  return (
    <>
      <ChatWrapper>
        <ChatLeft>
          <ChatBar
            socket={socket}
            setSelectUser={setSelectUser}
            onlineUsers={users}
            messageEvent={messageEvent}
            setMessageEvent={setMessageEvent}
            connect={connect}
            setConnect={setConnect}

          />
        </ChatLeft>

        <ChatRight>
          <ChatBody
            socket={socket}
            userSelected={userSelected}
            users={users}
            messageEvent={messageEvent}
            setMessageEvent={setMessageEvent}
          />
          <ChatFooter
            socket={socket}
            userSelected={userSelected}
            users={users}
            messageEvent={messageEvent}
            setMessageEvent={setMessageEvent}
          />
        </ChatRight>
      </ChatWrapper>
    </>
  );
};

export default Chat;
