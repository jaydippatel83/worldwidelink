const ethers = require("ethers")

export const priceFeedAddress = "0xd1B48c231eE234C89BC02E6E7C80F75115DFD04D";
export const priceFeedABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "getLatestAnswers",
    "outputs": [
      {
        "internalType": "int256[]",
        "name": "",
        "type": "int256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
export const priceFeedMatic = "0x6e4563C4F0FE668196C8878Cb89bdEF15b66e9B2";
export const priceFeedMaticABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "getLatestAnswers",
    "outputs": [
      {
        "internalType": "int256[]",
        "name": "",
        "type": "int256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

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
  ethereumtestnet: "https://sepolia.etherscan.io/tx",
};

export const networkIds = {
  mumbai: 80001,
  ethereumtestnet: 11155111,
};

export const chainParams = [
  {
    chainId: ethers.toQuantity(80001),
    rpcUrl: "https://rpc-mumbai.maticvigil.com/",
    chainName: "Matic Mumbai",
    symbol: "MATIC",
    decimals: 18,
  },
  {
    chainId: ethers.toQuantity(11155111),
    rpcUrl: "https://sepolia.infura.io/v3/",
    chainName: "Ethereum Sepolia",
    symbol: "ETH",
    decimals: 18,
  },
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
