const { Conflux } = require('js-conflux-sdk');
import Contract from '../ethereum/CrossSync.json';

const cfx = new Conflux({
	url: 'http://testnet-jsonrpc.conflux-chain.org:12537',
	logger: console,
});
const contract = cfx.Contract({
	abi: Contract.abi,
	address: '0x8d27e34c6e9462803c5ee0512307b181afe60fc9',
});

export default contract;
