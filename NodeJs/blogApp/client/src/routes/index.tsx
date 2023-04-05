
import { IRoutes } from "interfaces";
import Posts from "views/Posts";


import CreateBlog from "views/CreateBlog";

const RoutesA: IRoutes[] = [
  {
    path: "/",
    element: <Posts />,
    restricted: true,
  },
  {
    path: "/create-blog",
    element: <CreateBlog />,
    restricted: true,
  },
];

export { RoutesA };
