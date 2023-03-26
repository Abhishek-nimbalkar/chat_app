import { beforeEach, describe, before} from "mocha";
import chai, { expect } from "chai";
import { faker } from "@faker-js/faker";
import chaiAsPromised from "chai-as-promised";
import Posts from "./post";
import { connect } from "../db/db";

chai.use(chaiAsPromised);


describe("Post Model",()=>{
    before(async()=>{
        await connect();
    })
    beforeEach(async()=>{
        await Posts.deleteMany({});
    })
    it("should be able to save a new post",async()=>{
        const postData={
            userEmail:faker.internet.email(),
            title:faker.random.words(),
            body:faker.random.words(),
            img:faker.internet.url(),
            comments:undefined,
            likes:undefined
        }
        const post=new Posts(postData);
        post.save();
        const savedPost = await Posts.findOne({ title: postData.title });
        expect(savedPost?.userEmail).to.equal(postData.userEmail);
        expect(savedPost?.title).to.equal(postData.title);
        expect(savedPost?.body).to.equal(postData.body);
        expect(savedPost?.img).to.equal(postData.img);
        expect(savedPost?.comments.length).to.equal(0)
        expect(savedPost?.likes.length).to.equal(0);
        
    })
    it("Title should be Present",async()=>{
        const postData={
            userEmail:faker.internet.email(),
            // title:faker.random.words(),
            body:faker.random.words(),
            img:faker.internet.url(),
            comments:undefined,
            likes:undefined
        }
        const post=new Posts(postData);
        await expect(post.validate()).to.be.rejectedWith("Posts validation failed: title: Tile should be there");
    })

    it("Tile should be Unique",async ()=>{
        const postData={
            userEmail:faker.internet.email(),
            title:faker.random.words(),
            body:faker.random.words(),
            img:faker.internet.url(),
            comments:undefined,
            likes:undefined
        }
        const post=new Posts(postData)
        post.save();
        const post2=new Posts({
            userEmail:faker.internet.email(),
            title:postData.title,
            body:faker.random.words(),
            img:faker.internet.url(),
            comments:undefined,
            likes:undefined
        })
        await expect(post2.save()).to.be.rejectedWith(/E11000 duplicate key error collection/);
    });

    it("Body is required",async()=>{
        const postData={
            userEmail:faker.internet.email(),
            title:faker.random.words(),
            // body:faker.random.words(),
            img:faker.internet.url(),
            comments:undefined,
            likes:undefined
        }
        const post=new Posts(postData);
        await expect(post.validate()).to.be.rejectedWith("Posts validation failed: title: Body should be there");
    })
    it("IMG Url should be Present",async()=>{
        const postData={
            userEmail:faker.internet.email(),
            title:faker.random.words(),
            body:faker.random.words(),
            // img:faker.internet.url(),
            comments:undefined,
            likes:undefined
        }
        const post=new Posts(postData);
        await expect(post.validate()).to.be.rejectedWith("Posts validation failed: img: Img url should be there");
    })
})