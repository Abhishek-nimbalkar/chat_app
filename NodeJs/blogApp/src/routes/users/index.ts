import express, { Errback, Request, Response } from "express";
import Users from "../../models/user";
import SignUPController from "../../controllers/users/signUpCont"
import LoginController from "../../controllers/users/loginCont"

import { IUserSignUp } from "../../interfaces/userInterface";
import { generateJwt, verifyToken } from "../../middlewares/jwtTokenValidation";
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

router.post("/signUp",SignUPController);

router.post("/login",LoginController );

export default router;
