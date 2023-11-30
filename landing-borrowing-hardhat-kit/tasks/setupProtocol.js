require("@nomicfoundation/hardhat-toolbox");
const { networks } = require("../../src/network");

task("setupProtocol", "deploy Protocol.sol").setAction(
  async (taskArgs, hre) => {
    if (network.name === "hardhat") {
      throw Error(
        "This command cannot be used on a local development chain.  Specify a valid network."
      );
    }

    

    const bnmToken = networks[network.name].bnmToken;
    const lnmToken = networks[network.name].lnmToken;
    if (!bnmToken) {
      throw Error("Missing BNM Token Address");
    }

    const ROUTER = networks[network.name].router;
    const LINK = networks[network.name].linkToken;
    const TOKEN_TRANSFER_AMOUNT = "0.05";
    const LINK_AMOUNT = "0.5";

    console.log("\n__Compiling Contracts__");
    await run("compile");

    console.log(`\nDeploying WorldWideLinkProtocol.sol to ${network.name}...`);
    const protocolFactory = await ethers.getContractFactory(
      "WorldWideLinkProtocol"
    );
    const protocolContract = await protocolFactory.deploy(ROUTER, LINK);
    await protocolContract.deployTransaction.wait(1);

    console.log(
      `\nProtocol contract is deployed to ${network.name} at ${protocolContract.address}`
    );

    const [deployer] = await ethers.getSigners();

    // Fund with CCIP BnM Token
    console.log(
      `\nFunding ${protocolContract.address} with ${TOKEN_TRANSFER_AMOUNT} CCIP-BnM `
    );
    const bnmTokenContract = await ethers.getContractAt(
      "@chainlink/contracts/src/v0.4/interfaces/ERC20.sol:ERC20",
      bnmToken
    );

    const bnmTokenTx = await bnmTokenContract.transfer(
      protocolContract.address,
      ethers.parseUnits(TOKEN_TRANSFER_AMOUNT)
    );
    await bnmTokenTx.wait(1);

    const bnmTokenBal_baseUnits = await bnmTokenContract.balanceOf(
      protocolContract.address
    );
    const bnmTokenBal = ethers.formatUnits(
      bnmTokenBal_baseUnits.toString()
    );
    console.log(
      `\nFunded ${protocolContract.address} with ${bnmTokenBal} CCIP-BnM`
    );

    // Fund with CCIP LnM Token
    console.log(
      `\nFunding ${protocolContract.address} with ${TOKEN_TRANSFER_AMOUNT} CCIP-LnM `
    );
    const lnmTokenContract = await ethers.getContractAt(
      "@chainlink/contracts/src/v0.4/interfaces/ERC20.sol:ERC20",
      lnmToken
    );

    const lnmTokenTx = await lnmTokenContract.transfer(
      protocolContract.address,
      ethers.parseUnits(TOKEN_TRANSFER_AMOUNT)
    );
    await lnmTokenTx.wait(1);

    const lnmTokenBal_baseUnits = await lnmTokenContract.balanceOf(
      protocolContract.address
    );
    const lnmTokenBal = ethers.formatUnits(
      lnmTokenBal_baseUnits.toString()
    );
    console.log(
      `\nFunded ${protocolContract.address} with ${lnmTokenBal} CCIP-LnM`
    );

    // Fund with LINK
    console.log(
      `\nFunding ${protocolContract.address} with ${LINK_AMOUNT} LINK `
    );
    const LinkTokenFactory = await ethers.getContractFactory("LinkToken");
    const linkTokenContract = await LinkTokenFactory.attach(
      networks[network.name].linkToken
    );

    // Transfer LINK tokens to the contract
    const linkTx = await linkTokenContract.transfer(
      protocolContract.address,
      ethers.parseEther(LINK_AMOUNT)
    );
    await linkTx.wait(1);

    const juelsBalance = await linkTokenContract.balanceOf(
      protocolContract.address
    );
    const linkBalance = ethers.formatEther(juelsBalance.toString());
    console.log(
      `\nFunded ${protocolContract.address} with ${linkBalance} LINK`
    );

    // Get the MockUSDC Contract address.
    const usdcToken = await protocolContract.usdcToken();
    console.log(
      `\nMockUSDC contract is deployed to ${network.name} at ${usdcToken}`
    );
  }
);
