import { ISocket } from 'interfaces'
import React, { useEffect, useState } from 'react'
import getUser from 'utils/getUser'

const ChatBar = ({socket}:ISocket) => {
    const [users,setData]=useState<Array<any>>([])
    useEffect(()=>{
        getUser("/users").then((data:any)=>{
        setData(data)
    })
    },[])
    console.log(users);
    const onUsernameSelection=(e:any) =>{
        // usernameAlreadySelected = true;
        // socket.auth = { username };
        socket.connect();
        console.log(e.target.textContent);
        
      }
  return (
    <div className="chat__sidebar">
    <div>
      <h4 className="chat__header">ACTIVE USERS</h4>
      <div className="chat__users">
        {users?.map((user: any,key:number) => (
          <p key={key} onClick={onUsernameSelection}>{user.userName} </p>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ChatBar