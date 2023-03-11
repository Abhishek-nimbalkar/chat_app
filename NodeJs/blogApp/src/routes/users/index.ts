import express, { Errback, Request, Response } from "express";
import Users from "../../models/user";

import { IUserSignUp } from "../../interfaces/userInterface";
import { generateJwt, verifyToken } from "../../utils/jwtTokenValidation";
import { IJwtPayload } from "../../interfaces/jwtInterface";
const router = express.Router();

router.get("/",verifyToken, async (req:Request, res:Response) => {
  // const token:any=req.headers.authorization;
  // const email=await JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
  //   console.log(email.emailId);
    
    const users = await Users.find();
  //   console.log(jwtKey);

  res.send(users);
});

router.post("/signUp", async (req, res) => {
  try {
    const { emailId, userName, phone, password } = req.body;
    
    const userExist = await Users.findOne({ emailId: emailId });
    // console.log(emailId);

    if (userExist) throw new Error("User Alredy Existed");

    const newUserData: IUserSignUp = new Users({
      emailId: emailId,
      userName: userName,
      phone: phone,
      password: password,
    });
    
    let newUser = Users.create(newUserData);
    //   res.send(newUser);

    res.status(201).send("New User Added");
    
  } catch (err: any) {
    res.status(505).send({ Error: true, message: err?.message });
  }
});

router.post("/login", async (req, res) => {
  const { emailId, password } = req.body;


  const userExist = await Users.findOne({ emailId:emailId});
  // console.log(userExist);
  
  try {
    if (!userExist)
      throw new Error("User Not Found Try to Login ");
      const user:IJwtPayload = {
        emailId: emailId
      };
      const token = generateJwt(user);
      res.json({ token });
  } catch (err:any) {
    res.status(500).send({error:true,message:err?.message} || "Problem in Login")
  }
});

export default router;
