import { ISocket } from 'interfaces';
import React, { useEffect, useState } from 'react';
import getUser from 'utils/getUser';


const ChatBar = ({socket}:ISocket) => {
    const [users,setUser]=useState<Array<any>>([])

    useEffect(()=>{
        getUser("/users").then((data:any)=>{
        setUser(data)
    })
    },[])
    // console.log(users);
    
  return (
    <div className="chat__sidebar">
    <div>
      <h4 className="chat__header">ACTIVE USERS</h4>
      <div className="chat__users">
        {users?.map((user: any,key:number) => (
          <p key={key} >{user.userName} </p>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ChatBar