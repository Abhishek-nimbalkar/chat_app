import express, { Request, Response } from "express";
import { resolve } from "path";
import Users from "../../models/user";

import { dataUri, multerUploads } from "../../middlewares/multer";
// import { cloudinaryConfig } from "../../config/cloudinaryConfig";
import cloudinaryUpload from "../../utils/CloudinaryUpload";

const router = express.Router();

// cloudinaryConfig();
router.post(
  "/",
  multerUploads,
  async (req: Request, res: Response) => {
    // console.log('req.body :', dataUri(req).content);
    if (!req.file) throw new Error("file don't exist ");
    try {
      const file = dataUri(req).content;
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

      res
        .status(201)
        .send({ success: true, msg: "Image uploaded Successfully" });
    } catch (error: any) {
      console.log(error);

      res.status(409).send({ error: true, message: error?.message });
    }
  }
);

export default router;
