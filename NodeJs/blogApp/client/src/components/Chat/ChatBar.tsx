import { ISocket } from "interfaces";
import React, { useEffect, useState } from "react";
import getUser from "utils/getUser";

const ChatBar = ({
  socket,
  setSelectUser,
  onlineUsers,
  connect,
  setConnect,

}: any) => {
  const [users, setUser] = useState<Array<any>>([]);

  useEffect(() => {
    getUser("/users").then((data: any) => {
      setUser(data);
    });
    console.log("Api callled in ChatBar");
    setConnect(false)

  }, [connect, setConnect]);

console.log("current online Users",onlineUsers);


  // console.log(users);
  const handleClick = (e: any) => {
    setSelectUser(e.target.textContent);
    // console.log(e.target.textContent);
  };

  // if(onlineUsers){
  // console.log('first', onlineUsers[users[0].userName]!==undefined)
  // }
  return (
    <div className="chat__sidebar">
      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {users?.map((user: any, key: number) => (
            <>
              <p key={key} onClick={handleClick}>
                {user.userName}
                {user.hasNewMessages ? (
                  <i className="fa-solid fa-message-exclamation"></i>
                ) : null}
              </p>
              {
                // (onlineUsers[user.userName]!==undefined && <p style={{color:"green"}}>fdfddfdf</p>)

                // (OnlineUsers[user.userName])? <i className="fa-solid fa-globe"></i>:null
                onlineUsers ? (
                  onlineUsers[user.userName.trim()] !== undefined ? (
                    <i
                      key={Math.random() * 1000}
                      className="fa-solid fa-globe"
                    ></i>
                  ) : (
                    <i
                      key={Math.random() * 1000}
                      className="fa-regular fa-square-xmark"
                    ></i>
                  )
                ) : null
              }
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
