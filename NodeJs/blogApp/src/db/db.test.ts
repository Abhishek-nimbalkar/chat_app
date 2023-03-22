import { connect } from "./db";
import {expect} from 'chai'

describe('For Checking DB Connection', () => {
    it("Connected to DB or Not",(done)=>{
        expect(connect()).to.throw(Error);
        done();
    })
});