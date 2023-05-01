import { Response,Request,NextFunction} from "express";
import { IJwtPayload } from "interfaces/jwtInterface";
import jwt, { Jwt } from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

const jwtKey: any = process.env.JWT_KEY;
const JWT_EXPIRATION_TIME = "1h";

export const generateJwt = (payload: IJwtPayload): string => {
  return jwt.sign(payload, jwtKey, { expiresIn: JWT_EXPIRATION_TIME });
};
// export const verifyJwt = (token: string): IJwtPayload | null => {
//   try {
//     const decoded = jwt.verify(token, jwtKey) as IJwtPayload;
//     return decoded;
//   } catch (error) {
//     return null;
//   }
// };
export const verifyToken = (req:Request, res:Response, next:NextFunction) => {
  const userToken = req.headers.authorization;
  // const userToken = authHeader?.split(' ')[1];
  // console.log(token);
  if (!userToken) {
    return res.status(403).send({error:true,message:"A token is required for authentication"});
  }
  try {
    const decoded = jwt.verify(userToken, jwtKey);
    if(!decoded) throw new Error ("Token is Invalid ")
    // req.user = decoded;
    // console.log(req.user.name);
  } catch (err) {
    return res.status(401).send({error:true,message:"Invalid Token"});
  }
  return next();
};


