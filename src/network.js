// All supported networks and related contract addresses are defined here.
//
// LINK token addresses: https://docs.chain.link/resources/link-token-contracts/
// Price feeds addresses: https://docs.chain.link/data-feeds/price-feeds/addresses
// Chain IDs: https://chainlist.org/?testnets=true

// const { config } = require("dotenv");

// config();

const DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS = 2;

const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
export const networks = {
  sepolia: {
    url: process.env.REACT_APP_SEPOLIA_RPC_URL || "THIS HAS NOT BEEN SET",
    gasPrice: undefined,
    router: "0xd0daae2231e9cb96b94c8512223533293c3693bf",
    chainSelector: "16015286601757825753",
    accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    verifyApiKey: "THIS HAS NOT BEEN SET",
    chainId: 11155111,
    confirmations: DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS,
    nativeCurrencySymbol: "ETH",
    linkToken: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
    bnmToken: "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05",
    lnmToken: "0x466D489b6d36E7E3b824ef491C225F5830E81cC1",
    usdcPriceFeed: "0x5fb1616F78dA7aFC9FF79e0371741a747D2a7F22", // ETH/USD
    daiPriceFeed: "0x5fb1616F78dA7aFC9FF79e0371741a747D2a7F22", // ETH/USD
    //Contract Addresses
    sender: "0x53cc33bCb8f54BD041210Be871b7b3FAF3884ac2",
    protocol: "0x67179faFCB5Fbf8F106DaFFA3fb70e1369c1Fc3f",
    sosTokenTransfer: "0x5c79ACdd2845F6478C75338d5BEC6DA85113d13E",
  },
  mumbai: {
    url: process.env.REACT_APP_MUMBAI_RPC_URL || "THIS HAS NOT BEEN SET",
    router: "0x70499c328e1e2a3c41108bd3730f6670a44595d1",
    chainSelector: "12532609583862916517",
    gasPrice: undefined,
    accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    verifyApiKey: "THIS HAS NOT BEEN SET",
    chainId: 80001,
    confirmations: 2 * DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS,
    nativeCurrencySymbol: "MATIC",
    linkToken: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
    bnmToken: "0xf1E3A5842EeEF51F2967b3F05D45DD4f4205FF40",
    lnmToken: "0xc1c76a8c5bfde1be034bbcd930c668726e7c1987",
    usdcPriceFeed: "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada", // MATIC/USD
    daiPriceFeed: "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada", // MATIC/USD
    //Contract Addresses
    sender: "0x3Db45de715929b76E0570d01815F20eEe576B9E7",
    protocol: "0x9c29a12d441757AcF45aa106A3905E85C008dFA2",
    sosTokenTransfer: "0x9C43B1696e8ef98f2D9eb5e084f0e41Da41dE32e",
    externalRequest: "0x403227Ba96250eaD0f12ba77951d7f65F9E5962d",
    consumer: "0x6Cf0473b429fE9919a6443D9fFF2c6A1aC897A5e",
  },
  fuji: {
    url: process.env.AVALANCHE_FUJI_RPC_URL || "THIS HAS NOT BEEN SET",
    router: "0x554472a2720e5e7d5d3c817529aba05eed5f82d8",
    chainSelector: "14767482510784806043",
    gasPrice: undefined,
    accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    verifyApiKey: "THIS HAS NOT BEEN SET",
    chainId: 43113,
    confirmations: 2 * DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS,
    nativeCurrencySymbol: "AVAX",
    linkToken: "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846",
    bnmToken: "0xd21341536c5cf5eb1bcb58f6723ce26e8d8e90e4",
    lnmToken: "0x70f5c5c40b873ea597776da2c21929a8282a3b35",
    usdcPriceFeed: "0x5498BB86BC934c8D34FDA08E81D444153d0D06aD",  // AVAX / USD
    daiPriceFeed: "0x34C4c526902d88a3Aa98DB8a9b802603EB1E3470",  // LINK / USD
    //Contract Addresses
    sender: "0xD9902C09d1104f068772623F91dC9555545192dd",
    protocol: "0x2123e642A12d6Ce9B292B9F166971DFa97319b2D",
    por: "0xe28F1cfe684e907fdb9cC815b50a5dBF5350d007"
  },
};

export const chainsIds = {
  11155111: "sepolia",
  80001: "mumbai",
  43113: "fuji"
};

// module.exports = {
//   networks,
// };
