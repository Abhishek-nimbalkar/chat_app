import express, { Express, Request, Response } from 'express';
import { connect } from "./db/db";
import users from "./routes/users";
import posts from "./routes/posts";
import forgot from "./routes/forgotPass";
import addImg from "./routes/image";
// import UserRouter from './routes/UserRouter';
import { cloudinaryConfig } from './config/cloudinaryConfig';
import cors from "cors"


export const app: Express = express();
const port = 5000;

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

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});