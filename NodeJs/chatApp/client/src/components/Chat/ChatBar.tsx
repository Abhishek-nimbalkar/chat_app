import React, { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { notify } from '.';
import { ISocket, IUser } from '../../interfaces';

const ChatBar = ({socket}:ISocket) => {

  const [users, setUsers] = useState<IUser[]>([]);
  socket.on("leftUser",(data)=>{
    notify
  })

  useEffect(() => {
    socket.on('newUserResponse', (data:IUser[]) => setUsers(data));
  }, [socket, users]);
  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
        {users.map((user:IUser) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;