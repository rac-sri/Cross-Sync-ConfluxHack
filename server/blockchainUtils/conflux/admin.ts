// @ts-nocheck

import { Conflux } from 'js-conflux-sdk';
import Contract from '../CrossSync.json';
import util from 'js-conflux-sdk/src';

require('dotenv').config();

const cfx = new Conflux({
	url: 'http://testnet-jsonrpc.conflux-chain.org:12537',
	logger: console,
});

const account = cfx.wallet.addPrivateKey('0x' + process.env.PVTCFX);

const contract = cfx.Contract({
	abi: Contract.abi,
	address: '0x8d27e34c6e9462803c5ee0512307b181afe60fc9',
});

const transferEquivalentAmountFn = async (
	addr: String,
	value: Number
): Promise<any> => {
	const receipt = await contract
		.transferEquivalentAmountFn(addr, util.Drip.fromCFX(value))
		.sendTransaction({ from: account });
	return receipt;
};

const redeemExchangeMoney = async (
	addr: String,
	value: Number
): Promise<any> => {
	const receipt = await contract
		.redeemExchangeMoney(addr, util.Drip.fromCFX(value))
		.sendTransaction({ from: account });
	return receipt;
};

export { transferEquivalentAmountFn, redeemExchangeMoney };
