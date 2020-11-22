import contract from './cfx.ts';
const util = require('js-conflux-sdk/src/util');

test();

async function test() {
	console.log('start');

	//@ts-ignore
	const accounts = await window.conflux.send({ method: 'cfx_accounts' });
	console.log(contract);
	const money = contract.getMoney();
	//@ts-ignore
	const get = await window.conflux.send('cfx_call', [
		{ to: contract.address, data: money.data },
	]);
	console.log(get);

	const tx = contract['deposit']();
	//@ts-ignore
	const a = await window.conflux.send('cfx_sendTransaction', [
		{
			to: contract.address,
			// @ts-ignore
			from: window.conflux.selectedAddress,
			data: tx.data,
			value: '0x01',
		},
	]);
	console.log(a);
}
