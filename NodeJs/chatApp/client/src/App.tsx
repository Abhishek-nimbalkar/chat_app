import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import io,{Socket} from "socket.io-client";
import Home from './components/Home/index';
import ChatPage from './components/Chat';

 const socket:Socket=io("http://localhost:5000");

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home socket={socket} />} />
        <Route path="/chat" element={<ChatPage socket={socket} />} />
      </Routes>
    </Router>
    
  );
}

export default App;
