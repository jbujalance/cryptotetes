// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * The Cryptotetes ERC20 token contract.
 */
contract CryptotetesToken is ERC20 {

  constructor() ERC20("CryptoTetes", "TETES") {
    _mint(msg.sender, 1000000 * 10**decimals());
  }

}
