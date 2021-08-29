// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * The Cryptotetes ERC20 token contract.
 */
contract CryptotetesToken is ERC20, AccessControl {

  string private constant NAME = "CryptoTetes";
  string private constant SYMBOL = "TETES";
  uint8 private constant DECIMALS = 18;
  uint256 private constant INITIAL_SUPPLY = 1_000_000 * 10**DECIMALS;

  // ROLES
  bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
  bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

  constructor() ERC20(NAME, SYMBOL) {
    // Grant the contract deployer the default admin role: it will be able to grant and revoke any roles
    _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    
    // Grant the contract deployer the minter and burner roles
    _setupRole(MINTER_ROLE, msg.sender);
    _setupRole(BURNER_ROLE, msg.sender);
    
    // Mint the initial supply and trasfer it to the contract deployer
    _mint(msg.sender, INITIAL_SUPPLY);
  }

  function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
    _mint(to, amount);
  }

  function burn(address from, uint256 amount) public onlyRole(BURNER_ROLE) {
    _burn(from, amount);
  }

  function decimals() public view virtual override returns (uint8) {
    return DECIMALS;
  }

}
