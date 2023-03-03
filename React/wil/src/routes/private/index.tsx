import { Navigate } from "react-router-dom";
import { RoutesT } from "routes";
import { isLoggedIn } from "utils/isLoggedIn";

export const Private=(props:any)=>(
    isLoggedIn()? props.component: <Navigate to="/" />
) 
