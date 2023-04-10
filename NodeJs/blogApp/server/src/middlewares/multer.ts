import multer from "multer";
import DatauriParser from "datauri/parser";
import path from "path";
import { Request } from "express";
import { log } from "console";

// import { Request } from 'express';

const parser = new DatauriParser();
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single("image");

const dataUri = (req: any) => {
  
  const extName = path.extname(req.file.originalname).toString();
  
  if(extName !== ".png" && extName !== ".jpg"){
    throw new Error("File chosen is not picture")
  }
  const file64 = parser.format(extName, req.file.buffer);
  // console.log(req.file);
  return file64;
  
};

export { multerUploads, dataUri };
