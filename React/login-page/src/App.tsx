import React from "react";

import {BrowserRouter as Router,Routes, Route, Link,useNavigation} from 'react-router-dom';

import Login from "components/Login"
import Dashboard from "components/Dashboard";
import {Body} from "style/components/style"

import "./App.css";





const App=()=> {
  
  return(
    <>
    <Body>
      <Router>
        <Routes>
            <Route index  element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
    </Body>
    </>
    
    
  )
}

export default App;
