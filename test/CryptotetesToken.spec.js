const { expectRevert } = require('@openzeppelin/test-helpers');
const CryptotetesToken = artifacts.require("CryptotetesToken");

contract("Cryptotetes", async accounts => {

  const DEFAULT_ADMIN_ROLE = '0x0000000000000000000000000000000000000000000000000000000000000000';
  const [ owner, other ] = accounts;
  let instance;

  beforeEach(async () => {
    instance = await CryptotetesToken.new();
  });

  it("should have the expected name", async () => {
    const name = await instance.name();
    assert.equal(name, "CryptoTetes");
  });

  it("should have the expected symbol", async () => {
    const symbol = await instance.symbol();
    assert.equal(symbol, "TETES");
  });

  it("should have the expected decimals", async () => {
    const decimals = await instance.decimals();
    assert.equal(decimals, 18);
  });

  it("should mint 1 000 000 tokens for the deployer account", async () => {
    const deployerBalance = await instance.balanceOf(owner);
    assert.equal(deployerBalance.toString(), "1000000000000000000000000");
  });

  it("should grant the DEFAULT_ADMIN_ROLE role to the deployer account", async () => {
    const hasAdminRole = await instance.hasRole(DEFAULT_ADMIN_ROLE, owner);
    assert.isTrue(hasAdminRole);
  });

  it("should grant the MINTER role to the deployer account", async () => {
    const minterRoleHash = web3.utils.keccak256("MINTER_ROLE");
    const hasMinterRole = await instance.hasRole(minterRoleHash , owner);
    assert.isTrue(hasMinterRole);
  });

  it("should grant the BURNER role to the deployer account", async () => {
    const burnerRoleHash = web3.utils.keccak256("BURNER_ROLE");
    const hasMinterRole = await instance.hasRole(burnerRoleHash , owner);
    assert.isTrue(hasMinterRole);
  });

  it("should allow the contract deployer to mint tokens", async () => {
    const mintedAmount = 1_000;
    await instance.mint(other, mintedAmount);
    const balance = await instance.balanceOf(other);
    assert.equal(balance.toNumber(), mintedAmount);
  });

  it("should allow the contract deployer to burn tokens", async () => {
    // Mint some tokens on the target address first, so that we can burn them later
    const mintedAmount = 1_000;
    await instance.mint(other, mintedAmount);

    const burnedAmount = 300;
    await instance.burn(other, burnedAmount);
    const balance = await instance.balanceOf(other);
    assert.equal(balance.toNumber(), mintedAmount - burnedAmount);
  });

  it("should forbid minting from an unauthorized address", async () => {
    await expectRevert(
      instance.mint.call(other, 1000, {from: other}),
      "AccessControl"
    );
  });

  it("should forbid burning from an unauthorized address", async () => {
    await expectRevert(
      instance.burn.call(other, 1000, {from: other}),
      "AccessControl"
    );
  });

});
