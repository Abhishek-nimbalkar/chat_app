import express, { Errback, Request, Response } from "express";
import Users from "../../models/user";

export default async(req:Request,res:Response)=>{
    try{
      const emailId=req.params.email;
      const userData:any=await Users.findOne({emailId:emailId});
      if(!userData) return res.status(404).send({error:true,message:"User Not found"})
      res.status(200).send({user:userData})
      
    
    }catch(err:any){
      res.status(500).send({error:true,message:err?.message})
    }
}