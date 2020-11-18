import Contract from '../ethereum/CrossSync.json';
import conflux from './cfx.ts';

const contract = conflux.Contract({
	abi: Contract.abi,
	address: '0x865b09A7EeeaF77c06F98178114385149635Acf1',
});
test();

async function test() {
	console.log('start');
	//@ts-ignore
	await window.conflux.enable();
	//@ts-ignore
	const accounts = await window.conflux.send({ method: 'cfx_accounts' });
	console.log(contract);
	const a = await contract.deposit().sendTransaction({
		from: accounts[0],
		gasPrice: 11999999,
		value: 2,
	});
	console.log(a);
}
