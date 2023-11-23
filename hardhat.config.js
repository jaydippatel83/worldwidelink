require("@nomicfoundation/hardhat-toolbox");
require("hardhat-contract-sizer");
require("@openzeppelin/hardhat-upgrades");
require("@chainlink/env-enc").config();
require("./tasks");
const { networks } = require("./src/network");

const { config }  = require("dotenv");

config();
const SOLC_SETTINGS = {
  optimizer: {
    enabled: true,
    runs: 1_000,
  },
};

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: SOLC_SETTINGS,
      },
      {
        version: "0.8.7",
        settings: SOLC_SETTINGS,
      },
      {
        version: "0.6.6",
        settings: SOLC_SETTINGS,
      },
      {
        version: "0.4.24",
        settings: SOLC_SETTINGS,
      },
    ],
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      accounts: process.env.REACT_APP_PRIVATE_KEY
        ? [
            {
              privateKey: process.env.REACT_APP_PRIVATE_KEY,
              balance: "10000000000000000000000",
            },
          ]
        : [],
    },
    ...networks,
  },
  contractSizer: {
    runOnCompile: false,
    only: [
      "FunctionsConsumer",
      "AutomatedFunctionsConsumer",
      "FunctionsBillingRegistry",
    ],
  },
  paths: {
    sources: "./contracts",
    // tests: "./test",
    cache: "./build/cache",
    artifacts: "./build/artifacts",
  },
};
