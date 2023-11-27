import { ethers } from "ethers";

export const chain = {
    80001: "mumbai",
    11155111: "ethereumtestnet", //SEPOLIA
};

export const logos = {
    mumbai: "./assets/images/coins/coin1.png",
    ether: "./assets/images/coins/coin3.png",
};

export const networkURL = {
    mumbai: "https://mumbai.polygonscan.com/tx",
    ethereumtestnet: "https://sepolia.etherscan.io/tx"
};

export const networkIds = {
    mumbai: 80001,
    ethereumtestnet: 11155111
};

export const chainParams = [
    {
        chainId: ethers.toBeHex(80001),
        rpcUrl: "https://rpc-mumbai.maticvigil.com/",
        chainName: "Matic Mumbai",
        symbol: "MATIC",
        decimals: 18,
    },
    {
        chainId: ethers.toBeHex(11155111),
        rpcUrl: "https://rpc2.sepolia.org",
        chainName: "Ethereum Sepolia",
        symbol: "ETH",
        decimals: 18,
    }
];

export const multiChains = [

    {
        label: "Polygon Mumbai",
        value: "mumbai",
        image: "./assets/images/coins/coin1.png",
        chainId: 80001,
        priority: 0,
    },
    {
        label: "Ethereum Sepolia",
        value: "ethereumtestnet",
        image: "https://request-icons.s3.eu-west-1.amazonaws.com/eth.svg",
        chainId: 11155111,
        priority: 1,
    },
]; 