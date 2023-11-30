require("@nomicfoundation/hardhat-toolbox");
const { networks } = require("../src/network");
const { config }  = require("dotenv");

config();

task("setupSender", "deploy Sender.sol").setAction(async (taskArgs, hre) => {


  const bnmToken = networks[network.name].bnmToken;
  const lnmToken = networks[network.name].lnmToken;
  if (!bnmToken) {
    throw Error("Missing BNM Token Address");
  }

  const ROUTER = networks[network.name].router;
  const LINK = networks[network.name].linkToken;

  const TOKEN_TRANSFER_AMOUNT = "0.05";
  const LINK_AMOUNT = "1";

  console.log("\n__Compiling Contracts__");
  await run("compile");

  console.log(`\nDeploying Sender.sol to ${network.name}...`);
  const senderFactory = await ethers.getContractFactory("Sender");
  const senderContract = await senderFactory.deploy(ROUTER, LINK);
  await senderContract.deployTransaction.wait(1);

  console.log(
    `\nSender contract is deployed to ${network.name} at ${senderContract.address}`
  );

  // Fund with CCIP BnM Token
  console.log(
    `\nFunding ${senderContract.address} with ${TOKEN_TRANSFER_AMOUNT} CCIP-BnM `
  );
  const bnmTokenContract = await ethers.getContractAt(
    "@chainlink/contracts/src/v0.4/interfaces/ERC20.sol:ERC20",
    bnmToken
  );

  const bnmTokenTx = await bnmTokenContract.transfer(
    senderContract.address,
    ethers.parseUnits(TOKEN_TRANSFER_AMOUNT)
  );
  await bnmTokenTx.wait(1);

  const bnmTokenBal_baseUnits = await bnmTokenContract.balanceOf(
    senderContract.address
  );
  const bnmTokenBal = ethers.formatUnits(
    bnmTokenBal_baseUnits.toString()
  );
  console.log(
    `\nFunded ${senderContract.address} with ${bnmTokenBal} CCIP-BnM`
  );

  // Fund with CCIP LnM Token
  console.log(
    `\nFunding ${senderContract.address} with ${TOKEN_TRANSFER_AMOUNT} CCIP-LnM `
  );
  const lnmTokenContract = await ethers.getContractAt(
    "@chainlink/contracts/src/v0.4/interfaces/ERC20.sol:ERC20",
    lnmToken
  );

  const lnmTokenTx = await lnmTokenContract.transfer(
    senderContract.address,
    ethers.parseUnits(TOKEN_TRANSFER_AMOUNT)
  );
  await lnmTokenTx.wait(1);

  const lnmTokenBal_baseUnits = await lnmTokenContract.balanceOf(
    senderContract.address
  );
  const lnmTokenBal = ethers.formatUnits(
    lnmTokenBal_baseUnits.toString()
  );
  console.log(
    `\nFunded ${senderContract.address} with ${lnmTokenBal} CCIP-LnM`
  );

  // Fund with LINK
  console.log(`\nFunding ${senderContract.address} with ${LINK_AMOUNT} LINK `);
  const LinkTokenFactory = await ethers.getContractFactory("LinkToken");
  const linkTokenContract = await LinkTokenFactory.attach(
    networks[network.name].linkToken
  );

  const linkTx = await linkTokenContract.transfer(
    senderContract.address,
    ethers.parseUnits(LINK_AMOUNT)
  );
  await linkTx.wait(1);

  const juelsBalance = await linkTokenContract.balanceOf(
    senderContract.address
  );
  const linkBalance = ethers.formatEther(juelsBalance.toString());
  console.log(`\nFunded ${senderContract.address} with ${linkBalance} LINK`);
});
