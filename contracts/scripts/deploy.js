const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  const Board = await hre.ethers.getContractFactory("Board");
  const board = await Board.deploy();

  await board.deployed();

  console.log("Board deployed to: ", board.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
