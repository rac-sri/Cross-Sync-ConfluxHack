const { Harmony } = require('@harmony-js/core');
const {
	ChainID,
	ChainType,
	hexToNumber,
	numberToHex,
	fromWei,
	Units,
	Unit,
} = require('@harmony-js/utils');

const hmy = new Harmony('https://api.s0.b.hmny.io/', {
	chainType: ChainType.Harmony,
	chainId: ChainID.HmyTestnet,
});

const contract = require('./build/contracts/CrossSync.json');

const deploy = hmy.contracts.createContract(
	contract.abi,
	'0x4653380671f16EFb7F87a74A8d22Cc2b67030BB6'
);
deploy.methods
	.getMoney()
	.call()
	.then((res) => console.log('ans', res))
	.catch(console.log);
