const { Conflux } = require('js-conflux-sdk');
import Contract from '../ethereum/CrossSync.json';

const cfx = new Conflux({
	url: 'http://testnet-jsonrpc.conflux-chain.org:12537',
	logger: console,
});
const contract = cfx.Contract({
	abi: Contract.abi,
	address: '0x856b5cd8177ba3876881b6fca0ef0ff7895d18f8',
});

export default contract;
