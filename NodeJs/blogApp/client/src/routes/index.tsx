import Login from "views/LoginPage";
import { IRoutes } from "interfaces";
import Posts from "views/Posts";
import SignUp from "views/SignUpPage";




const RoutesA:IRoutes[]=[
    {
        path:"login",
        element:<Login />,
        restricted:false
    },
    {
        path:"SignUp",
        element:<SignUp />,
        restricted:false
    },
    {
        path:"posts",
        element:<Posts />,
        restricted:true
    },
]

export {RoutesA}