import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ISocket } from "../../interfaces";
import { newUserNotify } from "../Chat";
// import { LogInNotify } from "../Chat";


const Home = ({ socket }:ISocket) => {
  
  const nav = useNavigate();
  const [userName, setUserName] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    // console.log(e.target);
    socket.emit('newUser', { userName, socketID: socket.id });
    // newUserNotify(userName);
    nav("/chat");
  };
  return (
    <>
      
      <form className="home__container" onSubmit={handleSubmit}>
        <h2 className="home__header">Sign in to Open Chat</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          minLength={6}
          name="username"
          id="username"
          className="username__input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="home__cta" >
        {/* <button className="home__cta" > */}
          SIGN IN
        </button>
      </form>
    </>
  );
};

export default Home;
