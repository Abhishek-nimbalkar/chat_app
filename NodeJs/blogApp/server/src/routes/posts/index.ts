import express, {
  Request,
  Response,
} from "express";
import createPostController from "../../controllers/posts/createPostController";
import editPostController from "../../controllers/posts/editPostCont";
import addCommentController from '../../controllers/posts/addcommentCont';
import likePostController from "../../controllers/posts/likePostCont";
import getPostController from "../../controllers/singlePost/getSinglePostController";
// import { Ipost } from "interfaces/postInterface";
import Posts from "../../models/post";

import { verifyToken } from "../../middlewares/jwtTokenValidation";

import getPostsController from "../../controllers/posts/getPostsController";
import getSinglePostController from "../../controllers/singlePost/getSinglePostController";


const router = express.Router();

// router.use(verifyToken)

router.get("/:skipValue",getPostsController);

router.get("/getPost/:id",getSinglePostController);

router.post("/create",verifyToken, createPostController);

router.patch("/edit/:id",verifyToken, editPostController);
//************************* */ For comments *******************************//

router.patch("/addComment/:id",verifyToken,addCommentController);

router.patch("/like/:id",verifyToken,likePostController);

export default router;
