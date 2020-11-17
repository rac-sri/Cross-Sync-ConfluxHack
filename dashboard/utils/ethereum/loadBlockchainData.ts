import web3init from './web3.ts';
import CrossSync from './CrossSync.json';

declare global {
	interface window {
		web3: any;
	}
}

let accounts: Array<String>;
let Contract: any;

const loadBlockchainData = async () => {
	const web3 = await web3init();
	accounts = await web3.eth.getAccounts();

	const networkId = await web3.eth.net.getId();
	const networkData = CrossSync.networks[networkId];
	console.log(networkId);
	if (networkData) {
		const abi = CrossSync.abi;
		const address = networkData.address;
		Contract = new web3.eth.Contract(abi, address);
	} else {
		alert('Please Change the network to Rinkby');
		window.location.reload();
	}
	return { accounts, Contract };
};

export default loadBlockchainData;
