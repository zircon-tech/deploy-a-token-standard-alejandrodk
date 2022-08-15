// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract ZirconToken is ERC20, Ownable, ERC20Burnable {
    constructor(uint256 initialSupply) ERC20("Zircon", "ZRCN") {}

    function mint(address target, uint256 amount) public onlyOwner {
        _mint(target, amount);
    }

    function burn(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
    }
}
