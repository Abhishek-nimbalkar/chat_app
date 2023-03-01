import {useSelector } from "react-redux";

const LoggedIn = () => {
  const storedUser = useSelector((state:any) => state.Users)
  const email=storedUser.map((mail:any)=>mail.email);
  
  if(email.length >1){
    return true
  }
  else{
    return false
  }
  
}

export default LoggedIn