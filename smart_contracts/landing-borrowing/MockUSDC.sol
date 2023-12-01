// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract MockUSDC is ERC20, ERC20Burnable {
 
 address private owner;

  constructor() ERC20("MockUSDC", "WUSDC") {
    owner = msg.sender;

  }

  function mint(address to, uint256 amount) public  {
    require(owner == msg.sender, "Caller is not owner!");
    _mint(to, amount);
  }
}