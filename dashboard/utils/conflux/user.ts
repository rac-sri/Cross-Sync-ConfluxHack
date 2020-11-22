import contract from './cfx.ts';
const util = require('js-conflux-sdk/src/util');

declare global {
	interface Window {
		conflux: any;
	}
}

const depositToThePool = async (value: any): Promise<any> => {
	const tx = contract.deposit();
	const receipt = await window.conflux.send('cfx_sendTransaction', [
		{
			to: contract.address,
			from: window.conflux.selectedAddress,
			data: tx.data,
			value: value.toString(),
		},
	]);
	return receipt;
};

const refundMoney = async (amount: Number): Promise<any> => {
	const tx = contract.refund(
		window.conflux.sellectedAddress,
		amount.toString()
	);
	const receipt = await window.conflux.send('cfx_sendTransaction', [
		{
			to: contract.address,
			from: window.conflux.selectedAddress,
			data: tx.data,
		},
	]);
	return receipt;
};

const addExchangeMoney = async (overhead: Number, value): Promise<any> => {
	const tx = contract.addExchangeMoney(overhead);
	const receipt = await window.conflux.send('cfx_sendTransaction', [
		{
			to: contract.address,
			from: window.conflux.selectedAddress,
			data: tx.data,
			value: value.toString(),
		},
	]);
	return receipt;
};

const addExchangeMoneyFromPool = async (
	overhead: Number,
	value: Number
): Promise<any> => {
	const tx = contract.addExchangeMoneyFromPool(value.toString(), overhead);
	const receipt = await window.conflux.send('cfx_sendTransaction', [
		{
			to: contract.address,
			from: window.conflux.selectedAddress,
			data: tx.data,
		},
	]);
	return receipt;
};

export {
	depositToThePool,
	refundMoney,
	addExchangeMoney,
	addExchangeMoneyFromPool,
};
