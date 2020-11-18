const { Conflux } = require('js-conflux-sdk');

const cfx = new Conflux({
	url: 'http://testnet-jsonrpc.conflux-chain.org:12537',
	defaultGasPrice: 100, // The default gas price of your following transactions
	defaultGas: 1000000, // The default gas of your following transactions
	logger: console,
});

export default cfx;
