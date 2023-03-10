import express, { Errback } from "express";
import User from "../../models/user";

import { IUserSignUp } from "../../interfaces/userInterface";
import { generateJwt } from "../../utils/jwtTokenValidation";
import { IJwtPayload } from "../../interfaces/jwtInterface";
const router = express.Router();

router.get("/", async (req, res) => {
    
    const users = await User.find();
  //   console.log(jwtKey);

  res.send(users);
});

router.post("/signUp", async (req, res) => {
  try {
    const { emailId, userName, phone, password } = req.body;
    const newUserData: IUserSignUp = new User({
      emailId: emailId,
      userName: userName,
      phone: phone,
      password: password,
    });
    const userExist = await User.findOne({ emailId: emailId });
    // console.log(emailId);

    if (userExist) throw new Error("User Alredy Existed");
    let newUser = User.create(newUserData);
    //   res.send(newUser);

    res.status(201).send("New User Added");
  } catch (err: any) {
    res.status(505).send({ Error: true, message: err?.message });
  }
});

router.post("/login", async (req, res) => {
  const { emailId, password } = req.body;
  const user:IJwtPayload = {
    userId: emailId
  };

  try {
    if (!User.findOne({ emailId: emailId }))
      throw new Error("User Not Found Try to Login ");
      const token = generateJwt(user);
      res.json({ token });
  } catch (err:any) {
    res.status(500).send({error:true,message:err?.message} || "Problem in Login")
  }
});

export default router;
