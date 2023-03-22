import multer from 'multer';
import DatauriParser from "datauri/parser";


import path from 'path';
import { Request } from 'express';

const parser = new DatauriParser();
const storage=multer.memoryStorage();
const multerUploads=multer({storage}).single("image");
const dataUri=(req:any)=>{
    const extName = path.extname(req.file.originalname).toString();
  const file64 = parser.format(extName, req.file.buffer);
  return file64;
}


export  {multerUploads,dataUri};
