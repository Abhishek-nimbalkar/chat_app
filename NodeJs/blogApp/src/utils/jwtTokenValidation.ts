import { IJwtPayload } from "interfaces/jwtInterface";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";


dotenv.config();

const jwtKey:any=process.env.JWT_KEY;
const JWT_EXPIRATION_TIME = '0.1h';

export const generateJwt = (payload: IJwtPayload): string => {
    return jwt.sign(payload, jwtKey, { expiresIn: JWT_EXPIRATION_TIME });
  };
export const verifyJwt = (token: string): IJwtPayload | null => {
    try {
      const decoded = jwt.verify(token, jwtKey) as IJwtPayload;
      return decoded;
    } catch (error) {
      return null;
    }
  };