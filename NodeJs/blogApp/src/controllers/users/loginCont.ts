import { Request, Response } from "express";
import bcrypt from "bcrypt"
import { IJwtPayload } from "../../interfaces/jwtInterface";
import { generateJwt } from "../../middlewares/jwtTokenValidation";
import Users from "../../models/user";
export default async (req: Request, res: Response) => {
  const { emailId, password } = req.body;

  const userExist = await Users.findOne({ emailId: emailId });
  
  // console.log(userExist);
  if (!userExist){
    return res.status(409).send({error:true,message:"User Not found Try to SignUp first"})
  }

  try {
    //  throw new Error("User Not Found Try to Login ");
        // const dbpass=Users.findOne({})
        const dbPass:any=userExist?.password;
        
        const cmp = await bcrypt.compare(password,dbPass);
      if (cmp) {
        const user: IJwtPayload = {
            emailId: emailId,
          };
          const token = generateJwt(user);
          res.status(200).json({ token });
      } else {
        return res.status(401).send({error:true,message:"Wrong username or password."});
      }
    // } else {
    //   res.status(402).send("Wrong username or password.");
    // }
  } catch (err: any) {
    res.status(500).send({ error: true, message: err?.message } || "Problem in Login");
  }
};
