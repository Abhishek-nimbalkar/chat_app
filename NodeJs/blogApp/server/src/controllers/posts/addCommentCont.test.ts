import { beforeEach, describe, before } from "mocha";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { faker } from "@faker-js/faker";
import chaiAsPromised from "chai-as-promised";
import Posts from "../../models/post";
import { connect } from "../../db/db";
import { app } from "../../server";

describe("Add Comment Route",()=>{
    before(async()=>{
        await connect();
    })
    const Token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiQWJoaXNoZWsyQGdtYWlsLmNvbSIsImlhdCI6MTY3OTk1Mzg2MiwiZXhwIjoxNjc5OTU3NDYyfQ.6LkMHob-zsH3VWUUo_LEGc7aArf-0odfRPsVsQ5bOmU";
    const reqBody={
      comment:faker.random.words(10)
    };
    const postId="642209087962e189596a6d0f";
    it("#PATCH posts/addComment/:id Should AddComment",async()=>{
        chai
      .request(app)
      .patch("/posts/addComment/"+postId)
      .set("Authorization", Token)
      .send(reqBody)
      .end((err,res)=>{
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('success');
        res.body.should.have.property('message').equal("You Have Added Comment on postID ==== "+postId);
      })
    });
    it("#PATCH posts/addComment/:id Should AddComment",async()=>{
      chai
    .request(app)
    .patch("/posts/addComment/"+postId)
    .set("Authorization", Token)
    .send({comment:""})
    .end((err,res)=>{
      res.should.have.status(404);
      res.body.should.be.a('object');
      res.body.should.have.property('error');
      res.body.should.have.property('message').equal("Body is not Present");
    })
  });
})