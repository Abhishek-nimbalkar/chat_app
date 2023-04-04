import { ReactElement } from "react";

interface IRoutes{
    path:string,
    element:ReactElement,
    restricted:boolean,
}
interface IUseForm {
    example: string,
    exampleRequired: string,
  };

export type {IRoutes,IUseForm}