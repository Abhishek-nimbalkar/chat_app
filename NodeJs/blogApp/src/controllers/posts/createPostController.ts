import { Ipost } from "../../interfaces/postInterface";
import Posts from "../../models/post"

export default async (req: Request, res: Response) => {
    // console.log(email.emailId);
    try {
      const token = req.headers?.authorization;
      const email = await JSON.parse(
        Buffer.from(token.split(".")[1], "base64").toString()
      );
      const emailId: string = email.emailId;
  
      const { title,body,img } = req.body;
  
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
  }