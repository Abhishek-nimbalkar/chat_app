import express, { Request, Response } from "express";
import {multerUploads} from "../../middlewares/multer";
const router = express.Router();


router.post("/",multerUploads,(req:Request,res:Response)=>{
    console.log('req.body :', req.file);
    res.status(201).send({success:true,msg:"New image uploaded"})
})

export default router;