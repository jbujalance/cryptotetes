// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * The Cryptotetes ERC20 token contract.
 */
contract CryptotetesToken is ERC20 {

  string private constant NAME = "CryptoTetes";
  string private constant SYMBOL = "TETES";
  uint8 private constant DECIMALS = 18;
  uint256 private constant INITIAL_SUPPLY = 1_000_000 * 10**DECIMALS;

  constructor() ERC20(NAME, SYMBOL) {
    _mint(msg.sender, INITIAL_SUPPLY);
  }

  function decimals() public view virtual override returns (uint8) {
    return DECIMALS;
  }

}
