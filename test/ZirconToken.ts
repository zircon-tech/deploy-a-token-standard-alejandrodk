import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("Zircon Token tests", () => {
  async function deployContractFixture() {
    const totalSupply = ethers.utils.parseEther("1000");

    const ZirconToken = await ethers.getContractFactory("ZirconToken");
    const token = await ZirconToken.deploy(totalSupply);

    const [deployer] = await ethers.getSigners();

    return { token, totalSupply, deployer };
  }

  it("Should deploy contract", async () => {
    const { token } = await loadFixture(deployContractFixture);

    expect(token.address).to.exist;
  });

  it("Should have the right total supply", async () => {
    const { token, totalSupply: expected } = await loadFixture(
      deployContractFixture
    );

    expect(await token.totalSupply()).to.eq(expected);
  });

  it("Should send the right amount to the owner", async () => {
    const { deployer, totalSupply } = await loadFixture(deployContractFixture);
    const ownerBalance = await deployer.getBalance();
    const ownerEthers = ethers.utils.formatEther(ownerBalance);
    const supply = ethers.utils.formatEther(totalSupply);

    expect(parseFloat(ownerEthers)).gt(parseFloat(supply) - 1);
  });
});
