import { beforeEach, describe, before } from "mocha";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { faker } from "@faker-js/faker";
import chaiAsPromised from "chai-as-promised";
import Posts from "../../models/post";
import { connect } from "../../db/db";
import { app } from "../../server";

describe("Create Post Route", () => {
  before(async () => {
    await connect();
    await Posts.deleteMany({});
  });
  // beforeEach(async()=>{
  //     Posts.deleteMany({});
  // })
  const Body = {
    userEmail: faker.internet.email(),
    title: faker.random.word(),
    body: faker.lorem.paragraph(),
    img: faker.internet.url(),
  };
  const reqBody = {
    title: Body.title,
    body: Body.body,
    img: faker.internet.url(),
  };
  const Token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiQWJoaXNoZWsyQGdtYWlsLmNvbSIsImlhdCI6MTY3OTk1MTk1MSwiZXhwIjoxNjc5OTUyNTUxfQ.-oyRLp8mZ1qajBtiYDhhUxWCt7FJFN6y9NL_nL_beTA";
  it("#POST posts/create Should create new Post", async () => {
    chai
      .request(app)
      .post("/posts/create")
      .set("Authorization", Token)
      .send(reqBody)
      .end((err,res)=>{
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('success');
        res.body.should.have.property('message').equal("New Post Added");
      })
  });
  it("#POST posts/create Should Not Create Post for dublicate title", async () => {
    chai
      .request(app)
      .post("/posts/create")
      .set("Authorization", Token)
      .send(reqBody)
      .end((err,res)=>{
        res.should.have.status(403);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        res.body.should.have.property('message').equal("Post Allready Existed You Can either delete or Edit it");
      })
  });
});
