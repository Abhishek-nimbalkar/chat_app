import express, {
  Request,
  Response,
} from "express";
import { Ipost } from "interfaces/postInterface";
import Posts from "../../models/post";

import { verifyToken } from "../../utils/jwtTokenValidation";

const router = express.Router();

router.get("/", verifyToken, async (req: Request, res: Response) => {
  //   console.log(email.emailId);

  const posts = await Posts.find();
  //   console.log(jwtKey);
  res.send(posts);
});

router.post("/create", verifyToken, async (req: Request, res: Response) => {
  // console.log(email.emailId);
  try {
    const token: any = req.headers.authorization;
    const email = await JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );
    const emailId: string = email.emailId;

    const { title, body, img } = req.body;

    const newPostData: Ipost = new Posts({
      userEmail: emailId,
      title: title,
      body: body,
      img: img,
      comments:undefined,
      likes:undefined

    });
    const samePost = await Posts.findOne({ title: title });
    // console.log(emailId);

    if (samePost)
      throw new Error(
        "Post Allready Existed You Can either delete or Edit it "
      );
    let newPost = Posts.create(newPostData);
    //   res.send(newUser);

    res.status(201).send("New Post Added");
  } catch (err: any) {
    res.status(505).send({ Error: true, message: err?.message });
  }
});

router.patch("/edit/:id", verifyToken, async (req: Request, res: Response) => {
  const id = req.params.id;
  const postData:Ipost=req.body;
  const token: any = req.headers.authorization;
  const email = await JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString()
  );
  const emailId: string = email.emailId;
  // const verify=await Posts.findById(id).exec();
  // if(verify?.userEmail!==emailId) throw new Error ("Post Dont Exist ")
  try {
    const post = await Posts.findByIdAndUpdate(id, postData, { new: true });
    if (!post) throw new Error ("There is Some Error While Editing Post "); 
  } catch (err: any) {
    res
      .status(500)
      .send(
        { error: true, message: err?.message } || "Problem in Updating Post"
      );
  }

  res.send(emailId);
});
//************************* */ For comments *******************************//

router.patch("/addComment/:id",verifyToken,async(req:Request,res:Response)=>{
    const postId:string=req.params.id;
    const {comment}=req.body;
    const token: any = req.headers.authorization;
    const email = await JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );
    const emailId: string = email.emailId;
    try{
        const post = await Posts.findByIdAndUpdate(postId, {$push:{comments:{emailId:emailId,comment:comment}}}, { new: true });
        console.log(post);
        
        res.status(201).send(`You Have Added Comment on postID ====  ${postId} `)
    }catch(err:any){
        res.status(500).send({error:true,message:err?.message} || "Something get wrong ");
    }
})
router.patch("/like/:id",verifyToken,async(req:Request,res:Response)=>{
    const id:string=req.params.id;
    const token: any = req.headers.authorization;
    const email = await JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );
    const emailId: string = email.emailId;
    try{
        const post = await Posts.findByIdAndUpdate(id, {$push:{likes:{emailId}}}, { new: true });
        
        res.status(201).send(`You Have liked Post === ${id} `)
        
    }catch(err:any){
        res.status(500).send({error:true,message:err?.message} || "Something get wrong ");
    }
})

export default router;
