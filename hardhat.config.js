require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://holy-omniscient-meme.matic-testnet.discover.quiknode.pro/844a88e15be1e30d1f855bc750b2401cc57b3089/",
      accounts: ["943051ad0bbb6584187d255a85aac24935c806c40e6e6722973ef18ddff89b2c"],
    }
  }
};