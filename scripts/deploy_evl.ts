import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log("Deploying EVL with address:", deployerAddress);

  const EVLTokenFact = await ethers.getContractFactory("EVLToken");
  const EVLToken = await EVLTokenFact.deploy();

  await EVLToken.deployed();

  console.log("EVL deployed at", EVLToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
