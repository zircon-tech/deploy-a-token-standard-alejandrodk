// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZirconToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Zircon", "ZRCN") {
        _mint(msg.sender, initialSupply);
    }
}
