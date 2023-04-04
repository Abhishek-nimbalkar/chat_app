import { beforeEach, describe, before } from "mocha";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { faker } from "@faker-js/faker";
import chaiAsPromised from "chai-as-promised";
import Posts from "../../models/post";
import { connect } from "../../db/db";
import { app } from "../../server";

describe("Edit Post Route",()=>{
    before(async()=>{
        await connect();
    })
    const Token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiQWJoaXNoZWsyQGdtYWlsLmNvbSIsImlhdCI6MTY3OTk1Mzg2MiwiZXhwIjoxNjc5OTU3NDYyfQ.6LkMHob-zsH3VWUUo_LEGc7aArf-0odfRPsVsQ5bOmU";
    const reqBody={
        body:faker.random.words(5),
    };
    const postId="642209087962e189596a6d0f";
    it("#PATCH posts/edit/:id Should Edit Post Successfully",async()=>{
        chai
      .request(app)
      .patch("/posts/edit/"+postId)
      .set("Authorization", Token)
      .send(reqBody)
      .end((err,res)=>{
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('success');
        res.body.should.have.property('message').equal("Post Updated Successfully");
      })
    });
    it("#PATCH posts/edit/:id Should reject for Post Don't Exist",async()=>{
        chai
      .request(app)
      .patch("/posts/edit/640c5bb58c0f3fba518262f1")
      .set("Authorization", Token)
      .send(reqBody)
      .end((err,res)=>{
        res.should.have.status(404);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        res.body.should.have.property('message').equal("Post Don't Exsist");
      })
    });
})