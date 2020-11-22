import Web3 from 'web3';

enum fetchData {
	getMoney = 'getMoney',
	returnTotolPoolMoney = 'returnTotolPoolMoney',
	returnOverheadValues = 'returnOverheadValues',
}

const fetchingData = async (type: any, Contract: any) => {
	console.log(type);
	const value = fetchData[type];
	const result = await Contract.methods[value]().call();
	return Web3.utils.fromWei(result);
};

const getUserDetails = async (Contract: any, accounts: Array<String>) => {
	const {
		pendingExchangeMoney,
		valueForExchange,
		valueToThePool,
	} = await Contract.methods['getUserDetails'](accounts[0]).call();
	const FinalResult = {
		pendingExchangeMoney: Web3.utils.fromWei(pendingExchangeMoney),
		valueForExchange: Web3.utils.fromWei(valueForExchange),
		valueToThePool: Web3.utils.fromWei(valueToThePool),
	};
	return FinalResult;
};

export default fetchingData;
export { fetchData, getUserDetails };
