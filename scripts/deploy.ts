import { ethers } from "hardhat";

async function main() {
  const totalSupply = ethers.utils.parseEther("1000");

  const ZirconToken = await ethers.getContractFactory("ZirconToken");
  const token = await ZirconToken.deploy(totalSupply);

  await token.deployed();
  console.log("Zircon Token deployed to:", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
