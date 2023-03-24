import { connect } from "../db/db";
import {expect} from 'chai'
import { faker } from '@faker-js/faker';

import Users from "../models/user"

describe('User model', () => {
    // before(async () => {
      
    // });
  
    beforeEach(async () => {
      await connect();
      await Users.deleteMany({});
    });
  
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
  
    it('should not be able to save a user with a duplicate email', async () => {
      const userData1 = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        age: 30
      };
      const user1 = new User(userData1);
      await user1.save();
  
      const userData2 = {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'john.doe@example.com', // same email as user1
        age: 25
      };
      const user2 = new User(userData2);
      let error;
      try {
        await user2.save();
      } catch (err) {
        error = err;
      }
      expect(error).to.exist;
      expect(error.code).to.equal(11000);
      expect(error.keyValue.email).to.equal(userData2.email);
    });
  
  });
