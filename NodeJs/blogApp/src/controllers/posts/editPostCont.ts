import { Request,Response } from "express";
import { Ipost } from "../../interfaces/postInterface";
import Posts from "../../models/post"

export default  async (req: Request, res: Response) => {
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
  }