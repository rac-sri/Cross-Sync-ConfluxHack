require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
	networks: {
		rinkeby: {
			provider: function () {
				return new HDWalletProvider(
					'call glow acoustic vintage front ring trade assist shuffle mimic volume reject', // this is where the mnemonic code of the deployer goes. The one provied is just a testing code.
					'https://rinkeby.infura.io/v3/3dc8b2e3489c4260904f45a4e74a56dc'
				);
			},
			network_id: 4,
			gas: 4500000,
			gasPrice: 10000000000,
		},
	},

	// Set default mocha options here, use special reporters etc.
	mocha: {
		// timeout: 100000
	},

	// Configure your compilers
	compilers: {
		solc: {
			version: '0.7.0',
		},
	},
};
