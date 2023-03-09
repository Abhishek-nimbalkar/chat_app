const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const router = express.Router();
const isLoggedIn = require("../../utils/isLoggedIn");
// const verifyToken= require("../../utils/tokenValidater")

dotenv.config();
const jwtSecretKey = "Abhishek_jwt_secret_key";

const jwt = require("jsonwebtoken");
const { verifyToken } = require("../../utils/tokenValidater");

const dataPath = (__dirname, "src/Db/Users.json");

const getUserData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};
const addUser = (data) => {
  const oldData = getUserData();
  const newData = [...oldData, data];
  const stringifyData = JSON.stringify(newData);
  fs.writeFileSync(dataPath, stringifyData);
};
// const verifyToken = (req, res, next) => {
//   const userToken = req.headers["token"];
//   // console.log(token);
//   if (!userToken) {
//     return res.status(403).send("A token is required for authentication");
//   }
//   try {
//     const decoded = jwt.verify(userToken, jwtSecretKey);
//     req.user = decoded;
//     console.log(req.user.name);
//   } catch (err) {
//     return res.status(401).send("Invalid Token");
//   }
//   return next();
// };
router.get("/",verifyToken, (req, res) => {
  res.send(getUserData());
  // fs.readFile(dataPath, 'utf8', (err, data) => {
  //     if (err) {
  //      throw err
  //     }

  //     res.send(JSON.parse(data));

  //   });
});
router.post("/signUp", (req, res) => {
  // console.log(req.body);
  const { name, password } = req.body;

  try {
    if (!name || !password)
      throw new Error("Username or password not found in payload");

    addUser(req.body);
    res.status(201).send({ success: true, message: "New User Added" });
  } catch (err) {
    return res
      .status(400)
      .send({ error: true, message: err?.message || "Something went wrong" });
  }
});

// const isLoggedIn=(x,y)=>{
//     const Users=getUserData();
//     count =0;
//     Users.forEach((ele)=>{
//         if(ele.name===x && ele.password===y){
//             console.log(x,y);
//             count++;
//         }
//     })
//     if(count!=0) return true;
//     else return false;
// }

router.post("/login", (req, res) => {
  const { name, password } = req.body;
  try{
    if (isLoggedIn(name, password)) {
    // let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = { name };
    const token = jwt.sign(data, jwtSecretKey);
    res.send(token);
  }
  }catch(err){
    res.status(404).send({error:true,message:err?.message}|| "Error User Not Found Try SignUP")
  }
});

module.exports = router;
