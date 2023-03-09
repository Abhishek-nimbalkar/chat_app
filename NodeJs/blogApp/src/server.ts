import express, { Express, Request, Response } from 'express';
import { connect } from "db/db";
import users from "./routes/users"


const app: Express = express();
const port = 5000;

connect();
app.use(express.json());
app.use('/users', users);

// app.get('/', (req: Request, res: Response) => {
//   res.send('New Express Server with TypeScript');
// });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});