import { connect } from "../db/db";
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
  
  });
