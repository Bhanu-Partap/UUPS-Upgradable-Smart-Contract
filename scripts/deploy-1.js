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

// Proxy contract address
// xDE1146AD18dDc00f45A578b7f6612Cbe8FD96De6

// pizza contract address
// xde1146ad18ddc00f45a578b7f6612cbe8fd96de6  


main();