import express, { Request, Response } from "express";
import Tokens from "../../models/token";
import Users from "../../models/user";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { sendEmail } from "../../utils/sendEmail";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { email } = req.body;

  const user = await Users.findOne({ emailId: email });

  if (!user) {
    return res.status(400).send("User don't Exist ")
  }
  const token = await Tokens.findOne({ userId: user?._id });
  if (token) {
    await Tokens.deleteOne({ userId: user?._id });
  }
  const resetToken = crypto.randomBytes(32).toString("hex");

  const newToken=new Tokens({
    userId: user?._id,
    token: resetToken,
    createdAt: Date.now(),
  })
  Tokens.create(newToken);
  sendEmail(email,resetToken);
  return res.status(201).send({success:true,message:"Token send created and send to your email."})

  // const link = `${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`;
  // sendEmail(
  //   user.email,
  //   "Password Reset Request",
  //   { name: user.name, link: link },
  //   "./template/requestResetPassword.handlebars"
  // );
  // return link;
});

router.post("/reset",async(req:Request,res:Response)=>{
  try{
    const token=req.query.token;
    const tokenData=await Tokens.findOne({token:token});
    if(!tokenData) res.status(200).send({error:true,message:"Token has been expired "})
    const password=req.body.password;
      const saltRounds = 5;
      const newPassword=await bcrypt.hash(password, saltRounds);
      const userNewPass = await Users.findByIdAndUpdate({_id:tokenData?.userId},{$set:{password:newPassword}});
      await Tokens.findOneAndDelete({token:token})
      res.status(200).send({error:false,message:"New Password has been reset Sucessfully "})


  }catch(error:any){
     res.status(400).send({error:true,message:error?.message})
  }
})

export default router;
