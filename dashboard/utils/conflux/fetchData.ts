import { Conflux } from 'js-conflux-sdk/src';
import contract from './cfx.ts';
const util = require('js-conflux-sdk/src');

enum fetchData {
	getMoney = 'getMoney',
	returnTotolPoolMoney = 'returnTotolPoolMoney',
	returnOverheadValues = 'returnOverheadValues',
}

declare global {
	interface Window {
		conflux: any;
	}
}

const fetchingData = async (type: any) => {
	const fetch = contract[type]();
	const result = await window.conflux.send('cfx_call', [
		{ to: contract.address, data: fetch.data },
	]);
	const drip = util.format.bigInt(result);

	return util.Drip.prototype.toCFX(drip);
};

const getUserDetails = async () => {
	window.conflux.enable();
	console.log(window.conflux.selectedAddress);
	const x = await contract.getUserDetails(window.conflux.selectedAddress);
	console.log(x);
	const [value1, value2, value3, value4] = await contract.getUserDetails(
		window.conflux.selectedAddress
	);
	return {
		valueToThePool: util.Drip(value1.toString()).toCFX(),
		valueForExchange: util.Drip(value2.toString()).toCFX(),
		pendingExchangeMoney: util.Drip(value3.toString()).toCFX(),
	};
};

export default fetchingData;
export { fetchData, getUserDetails };
