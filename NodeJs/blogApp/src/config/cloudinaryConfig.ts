import { v2 as cloudinary } from 'cloudinary';
import {CloudinaryStorage } from 'multer-storage-cloudinary';

const cloudinaryConfig=()=> cloudinary.config({
    cloud_name: "drb23tns7",
    api_key: "222826464492629",
    api_secret: "1I-rWLwWT8mkjMoA9bLkebIlCTE"
  });

  export {cloudinaryConfig};