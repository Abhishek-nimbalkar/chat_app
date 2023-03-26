import { connect } from "../db/db";
import { describe } from "mocha";
import chai,{expect} from 'chai'
import { faker } from '@faker-js/faker';
import chaiAsPromised from 'chai-as-promised';
import Users from "../models/user"

chai.use(chaiAsPromised);



describe('User model', () => {
    // before(async () => {
      
    // });
  
    before(async () => {
      await connect();
      
    });
    beforeEach(async()=>await Users.deleteMany({}))
  
    it('should be able to save a new user', async () => {
      const userData = {
        emailId: faker.internet.email(),
        userName:faker.name.firstName(),
        phone: faker.phone.number(),
        password:faker.internet.password(),
      };
      const user = new Users(userData);
      await user.save();
  
      const savedUser = await Users.findOne({ emailId: userData.emailId });
      expect(savedUser?.emailId).to.equal(userData.emailId);
      expect(savedUser?.userName).to.equal(userData.userName);
      expect(savedUser?.phone).to.equal(userData.phone);
      expect(savedUser?.password).to.equal(userData.password);
    });
  
    it('Password should be There', async () => {
      const userData = {
        emailId: faker.internet.email(),
        userName: faker.name.firstName(),
        phone: faker.phone.number(),
        // password:faker.internet.password(),
      };
      const user = new Users(userData);
      
      await expect(user.validate()).to.be.rejectedWith('Users validation failed: password: password is Required');
    });
    it('Email should be There', async () => {
      const userData = {
        // emailId: faker.internet.email(),
        userName: faker.name.firstName(),
        phone: faker.phone.number(),
        password:faker.internet.password(),
      };
      const user = new Users(userData);
  
      await expect(user.validate()).to.be.rejectedWith('Users validation failed: emailId: Email is Required');
    });
    it('Email should be Unique', async () => {
      const user1D = {
        emailId: faker.internet.email(),
        userName: faker.name.firstName(),
        phone: faker.phone.number(),
        password:faker.internet.password(),
      };
      const user2D = {
        emailId: user1D.emailId,
        userName:faker.name.firstName() ,
        phone: faker.phone.number(),
        password:faker.internet.password(),
      };
      const user1 = new Users(user1D);
      user1.save();
      const user2 = new Users(user2D);
  
      await expect(user2.save()).to.be.rejectedWith(/E11000 duplicate key error collection/);
    });
    it("Email Should be Valid",async()=>{
      const user = {
        emailId: "sadfewaf",
        userName:faker.name.firstName() ,
        phone: faker.phone.number(),
        password:faker.internet.password(),
      };
      const userSave=new Users(user)
      await expect(userSave.save()).to.be.rejectedWith("Users validation failed: emailId: Email address is not valid")
    })
  
  });
