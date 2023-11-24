// All supported networks and related contract addresses are defined here.
//
// LINK token addresses: https://docs.chain.link/resources/link-token-contracts/
// Price feeds addresses: https://docs.chain.link/data-feeds/price-feeds/addresses
// Chain IDs: https://chainlist.org/?testnets=true

// const { config } = require("dotenv");

// config();

const DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS = 2;

const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
const networks = {
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
    sender: "0x6a4debE95DfE9486111Be1ac8efD6A8A2264f82e",
    protocol: "0xAff26709AAFb3723eDBfe179CB459D7313026d86",
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
    sender: "0x69Dc94D10B8e5C856F9aebA1D434253848bb4a6d",
    protocol: "0xc24991718c9cd134Ce9Dd8fF7dd1AC1923d0B131",
  },
};

module.exports = {
  networks,
};
