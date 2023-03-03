import Login from "components/LoginPage"
import Product from "components/Product"
import Users from "components/users"


export interface IRoute{
    path:string,
    element:JSX.Element,
    restricted:boolean

}

export const RoutesT:IRoute[]=[
    {
        path:"/",
        element:<Login />,
        restricted:false
    },
    {
        path:"/product",
        element:<Product />,
        restricted:true
    },
    {
        path:"/users",
        element:<Users />,
        restricted:true
    }
] 