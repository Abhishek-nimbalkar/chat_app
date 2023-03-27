import { beforeEach, describe, before } from "mocha";
import chai,{expect} from "chai";
import chaiHttp from "chai-http";
import { faker } from "@faker-js/faker";
import chaiAsPromised from "chai-as-promised";
import Users from "../../models/user";
import { connect } from "../../db/db";

import {app} from "../../server"
const should =chai.should();
chai.use(chaiAsPromised);
chai.use(chaiHttp);

const reqBody = {
    "emailId": "Abhishek1@gmail.com",
    "userName": "Abhishek1",
    "phone": "123456789",
    "password":"Abhishek1234"
};

describe("User SignUp Route", () => {
  before(async () => {
    await connect();
  });
  // beforeEach(async () => {
  //   await Users.deleteMany({});
  // });
  it.only(" #POST users/login Should return token ",  (done) => {
    
    chai.request(app)
    .post("/users/signUp")
    .send(reqBody)
    .end((err,res)=>{
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('token').to.be.a("string")
    done();
    })
  });

//   it(" #POST users/login User Dont Exist ",  (done) => {

//     chai.request(app)
//     .post("/users/signUp")
//     .send(reqBody)
//     .end((err,res)=>{
//         res.should.have.status(409);
//         res.body.should.be.a('object');
//         res.body.should.have.property('error').equal(true);
//         res.body.should.have.property("message").equal("User Not found Try to SignUp first")
//     done();

//     })
//   });
  
  
});
