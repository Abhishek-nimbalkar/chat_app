import multer from "multer";
import DatauriParser from "datauri/parser";
import path from "path";
import { NextFunction, Request, Response } from "express";
import { log } from "console";
import { request } from "http";

// import { Request } from 'express';

const parser = new DatauriParser();
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).array("image",3);
const multerMiddleWare = (req: Request, res: Response,next:NextFunction) => {
  let reque:any;  
  multerUploads(req,res,(err)=>{
    if(err instanceof multer.MulterError){
      return res.status(500).send({error:true,message:err.message})
    }else if(err){
      console.log("Multer error ",err);
    }
    // console.log(req.files);
    
    return next()
  })
  // next(req);
};

const dataUri = (req: any) => {
  // console.log(req);

  const extName = path.extname(req.files[0].originalname).toString();

  if (extName !== ".png" && extName !== ".jpg" && extName !== ".jpeg") {
    throw new Error("File chosen is not picture");
  }
  const file64 =req.files.map((i:any)=>{
    return parser.format(extName,i.buffer)
  })
  // console.log(file64.length);
  
  // const file64 = parser.format(extName, req.file.buffer);
  // console.log(req.file);
  return file64;
};

export { multerUploads, dataUri,multerMiddleWare };
