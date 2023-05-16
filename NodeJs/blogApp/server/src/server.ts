import express, { Express, Request, Response } from 'express';
import os from "os"
import path from 'path';
import { connect } from "./db/db";
import users from "./routes/users";
import posts from "./routes/posts";
import forgot from "./routes/forgotPass";
import addImg from "./routes/image";
// import UserRouter from './routes/UserRouter';
import { cloudinaryConfig } from './config/cloudinaryConfig';
import cors from "cors"
import dotenv from "dotenv";
// {path: path.resolve(process.cwd(), `../.env`) }
dotenv.config();

// dotenv configuration are done here
// console.log( {path: __dirname});



export const app: Express = express();
const port = 5002;

//Config Coudinary 
cloudinaryConfig();

connect();
app.use(cors({
  origin:"*"
}))
app.use(express.json());
app.use('/users', users);
app.use("/posts",posts);
app.use("/forgot",forgot);
app.use("/addImg",addImg);

// app.get('/', (req: Request, res: Response) => {
//   res.send('New Express Server with TypeScript');
// });
app.get("/",async(req:Request,res:Response)=>{
  res.status(200).send({succes:true,message:`response by ${os.hostname()}`})
})
app.listen(process.env.BLOG_APP_PORT || port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${process.env.BLOG_APP_PORT || port} ....., HostName:${os.hostname()}`);
});