import { connect } from './db';
import express, { Express, Request, Response } from 'express';
import mongo from "./routes/addData"

const app: Express = express();
const port = 5000;

connect();
app.use("/MongoData",mongo);

app.listen(port,()=>{
    console.log(`Server is running at https://localhost:${port}`);
    
})