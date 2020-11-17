import Web3 from 'web3';

declare global {
	interface Window {
		ethereum: any;
		web3: any;
	}
}

const loadWeb3 = async () => {
	let web3: any;

	if (typeof window != undefined) {
		if (window.ethereum) {
			web3 = new Web3(window.ethereum);
			try {
				await window.ethereum.enable();
				// User has allowed account access to DApp...
				web3.eth.defaultAccount = window.web3.eth.defaultAccount;
			} catch (e) {
				// User has denied account access to DApp...
			}
		} else if (window.web3) {
			web3 = new Web3(window.web3.currentProvider);
		}
	}

	return web3;
};

export default loadWeb3;
