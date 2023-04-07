import express, {
  Request,
  Response,
} from "express";
import createPostController from "../../controllers/posts/createPostController";
import editPostController from "../../controllers/posts/editPostCont";
import addCommentController from '../../controllers/posts/addcommentCont';
import likePostController from "../../controllers/posts/likePostCont";
import getPostController from "../../controllers/posts/getPostController";
// import { Ipost } from "interfaces/postInterface";
import Posts from "../../models/post";

import { verifyToken } from "../../middlewares/jwtTokenValidation";


const router = express.Router();

// router.use(verifyToken)

router.get("/", async (req: Request, res: Response) => {
  //   console.log(email.emailId);

  const posts = await Posts.find();
  //   console.log(jwtKey);
  res.send(posts);
});

router.get("/getPost/:title",verifyToken,getPostController);

router.post("/create",verifyToken, createPostController);

router.patch("/edit/:id",verifyToken, editPostController);
//************************* */ For comments *******************************//

router.patch("/addComment/:id",verifyToken,addCommentController);

router.patch("/like/:id",verifyToken,likePostController);

export default router;
