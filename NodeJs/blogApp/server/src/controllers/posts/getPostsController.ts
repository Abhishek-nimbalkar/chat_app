import { Request, Response } from "express";
import Posts from "../../models/post";

const getPostsController = async (req: Request, res: Response) => {
  //   console.log(email.emailId);
  const skip_no = Number(req.params.skipValue);

  const posts = await Posts.find().sort({ _id: -1 }).skip(skip_no).limit(5);  
  //   console.log(jwtKey);
  res.send(posts);
};

export default getPostsController;