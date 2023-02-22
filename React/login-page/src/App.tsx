import React from "react";
import "./App.css";
import {BrowserRouter as Router,Routes, Route, Link,useNavigation} from 'react-router-dom';




import InputContainer from "style/components/input";
import Button from "style/components/Button";
import Login from "components/Login"
import Dashboard from "components/Dashboard";



const App=()=> {
  
  return(
    <Router>
        <Routes>
            <Route index  element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
  )
}

export default App;
