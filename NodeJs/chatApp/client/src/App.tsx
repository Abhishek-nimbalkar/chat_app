import React from 'react';
import './App.css';

import io,{Socket} from "socket.io-client";

 const socket=io("http://localhost:5000");

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
