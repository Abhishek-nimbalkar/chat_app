import { ISocket } from 'interfaces';
import React, { useEffect, useState } from 'react';
import getUser from 'utils/getUser';


const ChatBar = ({socket,setSelectUser}:any) => {
    const [users,setUser]=useState<Array<any>>([])

    useEffect(()=>{
        getUser("/users").then((data:any)=>{
        setUser(data)
    })
    },[])
    // console.log(users);
    const handleClick=(e:any)=>{

      setSelectUser(e.target.textContent)
      // console.log(e.target.textContent);
      
    }
    
  return (
    <div className="chat__sidebar">
    <div>
      <h4 className="chat__header">ACTIVE USERS</h4>
      <div className="chat__users">
        {users?.map((user: any,key:number) => (
          <p key={key} onClick={handleClick}>{user.userName} </p>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ChatBar