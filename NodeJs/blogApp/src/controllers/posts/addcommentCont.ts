import { Request, Response } from "express";
import Posts from "../../models/post"
export default async(req:Request,res:Response)=>{
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
}