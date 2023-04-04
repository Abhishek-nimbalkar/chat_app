import { Request, Response } from "express";
import Posts from "../../models/post"
export default async(req:Request,res:Response)=>{
    const id:string=req.params.id;
    const token: any = req.headers.authorization;
    const email = await JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );
    const emailId: string = email.emailId;
    try{
        const post = await Posts.findByIdAndUpdate(id, {$push:{likes:{emailId}}}, { new: true });
        
        res.status(200).send({success:true,message:"You Have liked Post === "+id})
        
    }catch(err:any){
        res.status(500).send({error:true,message:err?.message} || "Something get wrong ");
    }
}