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
// xd51aA50843c18d77a874fb3D5FdF3f64c577Aec6

// pizza contract address
// xd51aa50843c18d77a874fb3d5fdf3f64c577aec6 


main();