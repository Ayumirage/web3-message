require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/VVAuKIsq6G3RN4RPr2aheAhEcZz71UMd",
      accounts: [
        "9d7ab0ec867751198c6c167f981160db86b2fc0511c7dfbaa1ec54f758d2d4e1",
      ],
    },
  },
};
