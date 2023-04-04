import { v2 as cloudinary } from 'cloudinary';
// import { NextFunction, Request, Response } from 'express';
import {CloudinaryStorage } from 'multer-storage-cloudinary';

const cloudinaryConfig=()=> {cloudinary.config({
    cloud_name: process.env.Cloudinary_cloud,
    api_key: process.env.Cloudinary_Key,
    api_secret: process.env.Cloudinary_Secret
  });
  // next();
  console.log("Cloudinary successfully Configured");
  
}
  export {cloudinaryConfig};