const { ethers, upgrades } = require("hardhat");

const SLICES = 9;
async function main() {
 const Pizza = await ethers.getContractFactory("Pizza");

 console.log("Deploying Pizza...");

 const pizza = await upgrades.deployProxy(Pizza, [SLICES], {
   initializer: "initialize",
 });
 await pizza.waitForDeployment();
 const address = await ("Pizza deployed to:", pizza.getAddress())
 console.log(address);
}

// contract address
// x5ac6ad85b881ef3087d581EaE059De29A269d66a


main();