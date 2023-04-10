import { Navigate } from "react-router-dom";


export const Private=(props:any)=>(
    localStorage.getItem("token")? props.component: <Navigate to="/" />
) 