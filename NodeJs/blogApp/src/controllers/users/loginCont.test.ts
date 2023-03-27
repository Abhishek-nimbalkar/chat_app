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
  emailId: "Abhishek@gmail.com",
  password:"Abhishek1234"
};

describe("User Login Route", () => {
  before(async () => {
    await connect();
  });
  // beforeEach(async () => {
  //   await Users.deleteMany({});
  // });
  it(" #POST users/login Should return token ",  (done) => {
    const Body = {
      emailId: "Abhishek2@gmail.com",
      password: "Abhishek1234",
    };
    chai.request(app)
    .post("/users/login")
    .send(Body)
    .end((err,res)=>{
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('token').to.be.a("string")
    done();
    })
  });

  it(" #POST users/login User Dont Exist ",  (done) => {

    chai.request(app)
    .post("/users/login")
    .send(reqBody)
    .end((err,res)=>{
        res.should.have.status(409);
        res.body.should.be.a('object');
        res.body.should.have.property('error').equal(true);
        res.body.should.have.property("message").equal("User Not found Try to SignUp first")
    done();

    })
  });
  it(" #POST users/login User Credential are wrong ",  (done) => {
    const Body = {
      emailId: "Abhishek2@gmail.com",
      password: "dz",
    };
    chai.request(app)
    .post("/users/login")
    .send(Body)
    .end((err,res)=>{
        res.should.have.status(401);
        res.body.should.be.a('object');
        res.body.should.have.property('error').equal(true);
        res.body.should.have.property("message").equal("Wrong username or password.")
    done();
    })
  });
  
});
