import express, { Request, Response } from "express";
import { resolve } from "path";
import Users from "../../models/user";

import {
  dataUri,
  multerMiddleWare,
  multerUploads,
} from "../../middlewares/multer";
// import { cloudinaryConfig } from "../../config/cloudinaryConfig";
import cloudinaryUpload from "../../utils/CloudinaryUpload";

const router = express.Router();

// cloudinaryConfig();
router.post("/", multerMiddleWare, async (req: Request, res: Response) => {
  // console.log('req.body :', dataUri(req).content);
  // console.log("Request ===========",req);

  // console.log("Request file =======",req.files);

  if (!req.files) {
    return res.status(400).send({ error: true, message: "File Don't Exist" });
  }
  try {
    const file = dataUri(req);

    const response = cloudinaryUpload(file);
    // let urlImg;
    const { email } = req.body;
    // console.log(email);

    response
      .then(async (data: any) => {
        //   console.log(data);
        console.log(data.url);
        //    urlImg=data.url;
        //   return data.url;
        await Users.updateOne(
          { emailId: email },
          { $set: { imgUrl: data.url } }
        );
      })
      .catch((err: any) => {
        console.log(err);
        //   return err;
      });

    res.status(201).send({ success: true, msg: "Image uploaded Successfully" });
  } catch (error: any) {
    console.log(error);

    res.status(409).send({ error: true, message: error?.message });
  }
});

export default router;
