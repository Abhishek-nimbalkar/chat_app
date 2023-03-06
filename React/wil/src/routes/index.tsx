import Login from "components/LoginPage"
import LoginPage2 from "components/LoginPage/loginPage2"
import Product from "components/Product"
import Users from "components/Users"
import { JsxElement } from "typescript"


export interface IRoute{
    path:string,
    element:any,
    restricted:boolean

}

export const RoutesT:IRoute[]=[
    {
        path:"/",
        element:<Login />,
        restricted:false
    },
    {
        path:"/products",
        element:<Product />,
        restricted:true
    },
    {

        path:"/users",
        element:<Users />,
        restricted:true
    }
] 