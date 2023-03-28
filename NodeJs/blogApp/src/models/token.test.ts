import { beforeEach, describe, before} from "mocha";
import mongoose from "mongoose";
import chai, { expect } from "chai";
import { faker } from "@faker-js/faker";
import chaiAsPromised from "chai-as-promised";
import Tokens from "./token";
import { connect } from "../db/db";


chai.use(chaiAsPromised);


describe("Token Model",()=>{
    before(async()=>{
        await connect();
    })
    beforeEach(async()=>{
        await Tokens.deleteMany({});
    })
    it("should be able to save a new post",async()=>{

        const tokenD={
            userId:new mongoose.mongo.ObjectId(),
            token:faker.random.alphaNumeric(50)
        }
        const Token=new Tokens(tokenD);
        await Token.save();
        const savedToken = await Tokens.findOne({ userId:tokenD.userId});
        
        expect(savedToken?.token).to.equal(tokenD.token);
        expect(savedToken?.userId).to.eql(tokenD.userId);
           
    })
    it("User Id should be there ",async()=>{
        const tokenD={
            // userId:new mongoose.mongo.ObjectId(),
            token:faker.random.alphaNumeric(50)
        }
        const Token=new Tokens(tokenD);
        await expect(Token.save()).to.be.rejectedWith("Tokens validation failed: userId: UserId is required")
        
    })
    it("Token should be there ",async()=>{
        const tokenD={
            userId:new mongoose.mongo.ObjectId(),
            // token:faker.random.alphaNumeric(50)
        }
        const Token=new Tokens(tokenD);
        await expect(Token.save()).to.be.rejectedWith("Tokens validation failed: token: Token is required")
        
    })
    
})