import { Request, Response } from "express";
import { Ipost } from "interfaces/postInterface";
import mongoose from "mongoose";
import Posts from "../../models/post";

export default async (req: Request, res: Response) => {
    const idParam= req.params.id;
    // console.log("idParam === ",idParam);
    
    try {
      const postExist=await Posts.findOne({_id:idParam});
      if(!postExist) return res.status(404).send({error:true,message:"Post Don't Exsist"})
      res.status(200).send({success:true,message:"Post is Displyed",post:postExist}); 
    } catch (err: any) {
      res
        .status(500)
        .send(
          { error: true, message: err?.message } || "Problem Finding Post"
        );
    }
  };
