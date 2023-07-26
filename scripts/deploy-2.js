const { ethers, upgrades } = require("hardhat");

const PROXY = "0xDE1146AD18dDc00f45A578b7f6612Cbe8FD96De6";

async function main() {
 const Pizza_V2 = await ethers.getContractFactory("PizzaV2");
 console.log("Upgrading Pizza...");
 await upgrades.upgradeProxy(PROXY, Pizza_V2);
 console.log("Pizza upgraded successfully");
}

main();