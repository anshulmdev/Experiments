const { timeStamp, todo, setupNewUser, getTheSecret } = require('./functions');
var expect = require('chai').expect;
var should = require('chai').should();
var sinon = require("sinon");
const dependencyModule = require("./dependencyModule");
const axios = require('axios');

describe("Basic GET Call", async function () {
  let sumFunc;
  beforeEach(() => {
    sumFunc = sinon.stub(dependencyModule, "sum").returns(1)
  })

  afterEach(() => {
    sumFunc.restore()
  })
  context ("Todo Function", function () {
    it("It should Get User", async function () {
      sumFunc.returns(1);
      const result = { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
      const functionValue = await todo(40);
      functionValue.should.deep.equal(result)
    })
  })
context ("TimeStamp Function", function () {
  it("It should Get Date", async function () {
    const result = "Thu Apr 28 2022 19:26:10 GMT+0000 (Coordinated Universal Time)"
    sinon.stub(dependencyModule, "getDate").returns("Thu Apr 28 2022 19:26:10 GMT+0000 (Coordinated Universal Time)")
    const value = await timeStamp();
    value.should.equal(result);
  })
})
})

describe("moduleUnderTest", function () {
  describe("when the secret is 3", function () {
    it("should be returned with a string prefix", function () {
      sinon.stub(dependencyModule, "getSecretNumber").returns(3);
      const result = getTheSecret();
      result.should.equal("The secret was: 3");
    });
  });
});
