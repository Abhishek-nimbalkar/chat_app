import React from 'react'
import LoggedIn from 'utils'
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }:any) => {
 const checkLogin=LoggedIn();
 return checkLogin ? children : <Navigate to="/LoginPage" />;
//  if(checkLogin){
//   return children;
//  }
//  else{
//   return <Navigate to="/LoginPage" /> 
//  }
//  return checkLogin?children:<Navigate to="/LoginPage" />
}

export default PrivateRoute;