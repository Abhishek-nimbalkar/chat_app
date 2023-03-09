import express from 'express';

import User from "models/user";

import {IUserSignUp} from "interfaces/userInterface"
const router = express.Router();

router.get('/',async (req, res) => {
    const users = await User.find();
    res.send(users);
});

router.post('/addUser',(req,res)=>{
    const newUser:IUserSignUp=req.body;

    res.send(newUser);
})

export default router;