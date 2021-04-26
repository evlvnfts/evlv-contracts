import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log("Deploying EVL with address:", deployerAddress);  
  const { EVL_ADDRESS } = process.env;

  const VestingFact = await ethers.getContractFactory("TokenVesting");
  const vestingFact = await VestingFact.deploy(EVL_ADDRESS);

  await vestingFact.deployed();

  console.log("Factory deployed at", vestingFact.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
