const hre = require("hardhat");
const ethers = hre.ethers;
const dotenv = require('dotenv');
dotenv.config();

async function main() {
  const board = await hre.ethers.getContractAt("Board", process.env.CONTRACT_ADDRESS);

  await board.sendMessage("Welcome to Toto's message board");

  console.log("Board updated");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
