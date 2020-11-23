// @ts-nocheck

import { Conflux } from 'js-conflux-sdk';
import Contract from '../CrossSync.json';
// import util from 'js-conflux-sdk/src';
import Web3 from 'web3';

require('dotenv').config();

const cfx = new Conflux({
	url: 'http://testnet-jsonrpc.conflux-chain.org:12537',
	logger: console,
});

const account = cfx.wallet.addPrivateKey('0x' + process.env.PVTCFX);

const contract = cfx.Contract({
	abi: Contract.abi,
	address: '0x856b5cd8177ba3876881b6fca0ef0ff7895d18f8',
});

const transferEquivalentAmountFn = async (
	addr: String,
	value: Number
): Promise<any> => {
	console.log(account);
	const receipt = await contract
		.transferEquivalentAmountFn(addr, Web3.utils.toWei(value.toString()))
		.sendTransaction({ from: account });
	return receipt;
};

const redeemExchangeMoney = async (
	addr: String,
	value: Number
): Promise<any> => {
	console.log(account);
	const receipt = await contract
		.redeemExchangeMoney(addr, Web3.utils.toWei(value.toString()))
		.sendTransaction({ from: account });
	return receipt;
};

export { transferEquivalentAmountFn, redeemExchangeMoney };
