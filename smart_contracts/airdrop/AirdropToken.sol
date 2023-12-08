// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WWLToken is ERC20, Ownable {
    constructor(
        address initialOwner
    ) ERC20("WorldWideLinkToken", "WWLT") Ownable(initialOwner) {}

    function issueToken(address receiver, uint256 amount) external onlyOwner {
        _mint(receiver, amount);
    }

    function getBalance(address userAddress) external view returns (uint256) {
        return balanceOf(userAddress);
    }
}
