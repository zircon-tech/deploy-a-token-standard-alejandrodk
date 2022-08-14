import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("Zircon Token tests", () => {
  async function deployContractFixture() {
    const totalSupply = ethers.utils.parseEther("1000");

    const ZirconToken = await ethers.getContractFactory("ZirconToken");
    const token = await ZirconToken.deploy(totalSupply);

    return { token, totalSupply };
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
});
