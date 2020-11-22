import contract from './cfx.ts';
const util = require('js-conflux-sdk/src');

declare global {
	interface Window {
		conflux: any;
	}
}

const depositToThePool = async (value: any): Promise<any> => {
	await window.conflux.enable();
	const tx = contract.deposit();
	const receipt = await window.conflux.send('cfx_sendTransaction', [
		{
			to: contract.address,
			from: window.conflux.selectedAddress,
			data: tx.data,
			value: util.Drip.fromCFX(value),
		},
	]);
	return receipt;
};

const refundMoney = async (amount: Number): Promise<any> => {
	console.log(util);
	console.log(util.Drip.fromCFX(amount));
	await window.conflux.enable();
	const tx = contract.refund(
		window.conflux.selectedAddress,
		util.Drip.fromCFX(amount)
	);
	console.log(amount.toString());
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
