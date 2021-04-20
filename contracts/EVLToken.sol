// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EVLToken is Ownable, ERC20 {
  string public version = "1.0";

  // constructor
  constructor() ERC20("Evlv Token", "EVL") {

    _mint(msg.sender, 100000000 * 10**decimals());
  }

}
