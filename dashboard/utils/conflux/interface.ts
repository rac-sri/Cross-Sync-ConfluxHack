import { text } from 'express';
import { Contract } from 'js-conflux-sdk';
import contract from './contract.ts';
const util = require('js-conflux-sdk/src/util');

declare global {
	interface Window {
		conflux: any;
	}
}

// const overheadPercentageValue = async (value:Number,overHeadPercent: Number)=>{
//     const tx = contract.overheadPercentageValue(util.unit.fromCFXToDrip(value),overHeadPercent.toString())
//     const data = await window.conflux.send("cfx_call",[{
//         to: contract.address,
//         data: tx.data
//     }]);
//     const drip = util.format.bigInt(data);
//     return util.unit.fromDripToCFX(drip);
// }

const updateBalance = async (
	address: String,
	interest: Number,
	time: Number
) => {
	const tx = contract.updateBalance(address, interest, time);
	const data = await window.conflux.send('cfx_sendTransaction', [
		{
			to: contract.address,
			data: tx.data,
			from: window.conflux.selectedAddress,
		},
	]);
	return Promise.resolve();
};

const moneyRecievedByLiquidator = async () => {
	const result = contract.moneyRecievedByLiquidator(
		window.conflux.selectedAddress
	);
	const value = await window.conflux.send('cfx_call', [
		{
			to: contract.address,
			data: result.data,
		},
	]);
	const drip = util.format.bigInt(value);
	return util.unit.fromDripToCFX(drip);
};

export { moneyRecievedByLiquidator, updateBalance };
