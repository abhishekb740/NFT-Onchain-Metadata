require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    mumbai:{
      url: process.env.TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan:{
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};
