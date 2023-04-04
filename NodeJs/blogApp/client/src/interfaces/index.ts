import { ReactElement } from "react";

interface IRoutes{
    path:string,
    element:ReactElement,
    restricted:boolean,
}

export type {IRoutes}