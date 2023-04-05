import { ReactElement } from "react";
import { JsxElement } from "typescript";

interface IRoutes{
    path:string,
    element:ReactElement,
    restricted:boolean,
}
interface ISignInForm {
    email: string,
    password: string,
  };
interface ISignUpForm{
  email:string,
  password:string,
  phoneNumber:string,
  userName:string
}

export type {IRoutes,ISignInForm,ISignUpForm}