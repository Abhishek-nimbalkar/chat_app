import { User } from 'components/LoginPage';
import React from 'react'

export const isLoggedIn = () =>{
    if(localStorage.getItem("user")){
        return true;
    }
   

}
 