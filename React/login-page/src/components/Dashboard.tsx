import useApi from "hooks/useApi";
import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Dashboard=()=> {
  const apiData=useApi("https://jsonplaceholder.typicode.com/todos");
  alert("hello");
  
  return (
    <div>dashboard</div>
  )
}

export default Dashboard;