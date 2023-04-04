import { v2 as cloudinary } from "cloudinary";

export default (file: any) => {
  const res = cloudinary.uploader.upload(file,{folder: 'userImg'});
  return res;
};
