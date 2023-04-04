import { beforeEach, describe, before } from "mocha";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { faker } from "@faker-js/faker";
import chaiAsPromised from "chai-as-promised";
import Posts from "../../models/post";
import { connect } from "../../db/db";
import { app } from "../../server";

const Token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiQWJoaXNoZWsyQGdtYWlsLmNvbSIsImlhdCI6MTY3OTk1ODgwOSwiZXhwIjoxNjc5OTYyNDA5fQ.t8oBg1uswAkwad2nBPQ5eK53VLZ9XM4fPBo3UdW5D90";

const postId="642209087962e189596a6d0f";
describe("Like Post Route",()=>{
    it.only("#PATCH posts/like/:id Should Edit Post Successfully",async()=>{
        chai
      .request(app)
      .patch("/posts/like/"+postId)
      .set("Authorization", Token)
      .send({})
      .end((err,res)=>{
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('success');
        res.body.should.have.property('message').equal("You Have liked Post === "+postId);
      });
})

});