// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const transferContract = await hre.ethers.deployContract("TokenTransferor");
//   const transfer = await transferContract.deploy("0xD0daae2231E9CB96b94C8512223533293C3693Bf", "0x779877A7B0D9E8603169DdbD7836e478b4624789");
//   await transfer.waitForDeployment();

//   console.log(
//     `Transfer tokens Contract Address ${transferContract.target}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Replace the following with the actual addresses of your Router and Link contracts
  const routerAddress = "0xD0daae2231E9CB96b94C8512223533293C3693Bf";
  const linkAddress = "0x779877A7B0D9E8603169DdbD7836e478b4624789";

  const TokenTransferor = await ethers.getContractFactory("TokenTransferor");
  const tokenTransferor = await TokenTransferor.deploy(routerAddress, linkAddress);

  console.log("TokenTransferor deployed to:", tokenTransferor.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //Token Address : 0xAF8B4C8Ff0db2E6e899AFDD5378A8fc0A92b4a03