
require("hardhat-deploy")
require("hardhat-deploy-ethers")

const { networkConfig } = require("../helper-hardhat-config")

const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    console.log("Wallet Ethereum Address:", wallet.address)

    //  Sender-Sepolia 
    const routerAddress = '0xd0daae2231e9cb96b94c8512223533293c3693bf';
    const linkAddress = '0x779877A7B0D9E8603169DdbD7836e478b4624789';
    const ccipAddress = '0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05';
    const escrowSender = await contractFactory.deploy(routerAddress, linkAddress, ccipAddress);
    console.log('Deploying escrow...');
    const Escrow = await escrowSender.deploy();
    await Escrow.deployed()
    console.log('Escrow deployed to:', Escrow.address);


    // Receiver-Mumbai
    // Set the constructor arguments
    const routerAddress1 = '0x70499c328e1e2a3c41108bd3730f6670a44595d1';
    const linkAddress1 = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB';
    const ccipAddress1 = '0xf1E3A5842EeEF51F2967b3F05D45DD4f4205FF40';

    // Deploy the contract with the constructor arguments
    const deployedContract = await contractFactory.deploy(routerAddress1, linkAddress1, ccipAddress1);
    const escrowReceiver = await contractFactory.deploy(routerAddress1, linkAddress1, ccipAddress1)
    const EscrowReceive = await escrowReceiver.deploy();
    await EscrowReceive.deploy();
    console.log('Escrow receiver deployed to: ', EscrowReceive.address);

}