import { connect } from "./db";
import { expect } from "chai";

describe("For Checking DB Connection", () => {
//   it("should connect to MongoDB when the details are correct", async () => {
//     const connection = await connect();
//     expect(connection).to.be.ok; // Assert that connection object is truthy
//   });

  it("should throw an error when the MongoDB connection details are incorrect", async () => {
    try {
      await connect();
    } catch (err:any) {
      expect(err.message).to.equal("Mongoose connection error");
    }
  });
});
