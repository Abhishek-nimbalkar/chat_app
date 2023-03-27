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

const Body = {
    emailId: faker.internet.email(),
    userName: faker.internet.userName(),
    phone: faker.phone.number(),
    password:faker.internet.password(),
};
const reqBody={
  emailId:Body.emailId,
  userName:Body.userName,
  phone:Body.phone,
  password:Body.password,
}

describe("User SignUp Route", () => {
  before(async () => {
    await connect();
  });
  // beforeEach(async () => {
  //   await Users.deleteMany({});
  // });
  it(" #POST users/login Should create new User ",  (done) => {
    chai.request(app)
    .post("/users/signUp")
    .send(reqBody)
    .end((err,res)=>{
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('message').equal("New User Added")
    done();
    })
  });

  it(" #POST users/singUp User Alerdy Exist ",  (done) => {

    chai.request(app)
    .post("/users/signUp")
    .send(reqBody)
    .end((err,res)=>{
        res.should.have.status(403);
        res.body.should.be.a('object');
        res.body.should.have.property('error').equal(true);
        res.body.should.have.property("message").equal("User Alredy Exist")
    done();

    })
  });
  
  
});
