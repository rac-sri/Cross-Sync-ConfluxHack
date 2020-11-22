import contract from './cfx.ts';
const util = require('js-conflux-sdk/src/util');

enum fetchData {
	getMoney = 'getMoney',
	getUserDetails = 'getUserDetails',
	returnTotolPoolMoney = 'returnTotolPoolMoney',
	returnOverheadValues = 'returnOverheadValues',
}

declare global {
	interface Window {
		conflux: any;
	}
}

const fetchingData = async (type: any, Contract: any) => {
	const accounts = await window.conflux.send({ method: 'cfx_accounts' });
	const value = fetchData[type];
	const fetch = contract[type]();
	const result = await window.conflux.send('cfx_call', [
		{ to: contract.address, data: fetch.data },
	]);
	const drip = util.format.bigInt(result);
	return util.unit.fromDripToCFX(drip);
};

export default fetchingData;
export { fetchData };
