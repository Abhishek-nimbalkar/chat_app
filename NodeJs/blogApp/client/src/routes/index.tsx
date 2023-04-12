

import { IRoutes } from "interfaces";
import CreateBlog from "views/CreateBlog";
import Home from "views/Home";
import Post from "views/Post";

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
  }
];

export { RoutesA };
