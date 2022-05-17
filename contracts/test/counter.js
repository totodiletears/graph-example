const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Should return the updated counter once it's changed", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    expect(await counter.count()).to.equal(0);

    const updateTx = await counter.update();

    // wait for txn to be mined
    await updateTx.wait();

    expect(await counter.count()).to.equal(1);
  })
})