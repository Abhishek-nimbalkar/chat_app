

import { IRoutes } from "interfaces";
import CreateBlog from "views/CreateBlog";
import ForgotPassword from "views/ForgotPassword";
import Home from "views/Home";
import Post from "views/Post";
import ResetPassword from "views/ResetPassword";

const RoutesA: IRoutes[] = [
  {
    path: "/",
    element: <Home />,
    restricted: false,
  },
  {
    path: "/create-blog",
    element: <CreateBlog />,
    restricted: true,
  },
  {
    path:"/post/:id",
    element:<Post />,
    restricted:true,
  },
  {
    path:"/forgotPassword",
    element:<ForgotPassword/>,
    restricted:false
  },
  {
    path:"/forgot/reset",
    element:<ResetPassword/>,
    restricted:false
  }
];

export { RoutesA };
