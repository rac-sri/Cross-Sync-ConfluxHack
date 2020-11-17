import Web3 from 'web3';
import TruffuleHDWallet from '@truffle/hdwallet-provider';
import CrossSync from '../CrossSync.json';

const provider = new TruffuleHDWallet(
	'call glow acoustic vintage front ring trade assist shuffle mimic volume reject', // this is where the mnemonic code of the deployer goes. The one provied is just a testing code.
	'https://rinkeby.infura.io/v3/3dc8b2e3489c4260904f45a4e74a56dc'
);

const web3 = new Web3(provider);

let accounts: Array<String>, networkId: any, networkData: any, contract: any;

const loadWeb3 = async () => {
	accounts = await web3.eth.getAccounts();

	//check the network we are on and extract that network instance
	networkId = await web3.eth.net.getId();
	networkData = CrossSync.networks[networkId];

	if (networkData) {
		const abi: any = CrossSync.abi;
		const address = networkData.address;
		contract = await new web3.eth.Contract(abi, address);
	}

	return { contract, accounts };
};

export { web3, loadWeb3 };
