module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten:  {
     network_id: 5777,
     host: "localhost",
     port:  8545,
     gas:   2900000
 	}
  }
};