// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ZirconNft is ERC721("Zircon NFT", "ZNFT") {
    constructor() {
        _mint(msg.sender, 1);
    }
}
