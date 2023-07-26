require("@nomicfoundation/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
// require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");



module.exports = {
 solidity: "0.8.10",
 networks: {
   sepolia: {
     url: "https://sepolia.infura.io/v3/ace13403824d4f809e011d9d547a4aa1",
     accounts: [`56fe1fd10f0203c190640fb0bad78e9bf29d10fc2fbc97ee1ff49ee4acd2d08a`],
   },
 },
 etherscan: {
   apiKey: {
    sepolia:"ace13403824d4f809e011d9d547a4aa1"
   },
 },
};