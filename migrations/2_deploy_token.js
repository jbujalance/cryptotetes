const CryptotetesToken = artifacts.require("CryptotetesToken");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(CryptotetesToken);
};
