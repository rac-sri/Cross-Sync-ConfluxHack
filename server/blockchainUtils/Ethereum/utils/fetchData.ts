import Web3 from 'web3';

enum fetchData {
	getMoney = 'getMoney',
	getUserDetails = 'getUserDetails',
	returnTotolPoolMoney = 'returnTotolPoolMoney',
	returnOverheadValues = 'returnOverheadValues',
}

const fetchingData = async (type: any, Contract: any) => {
	console.log(type);
	const value = fetchData[type];
	const result = await Contract.methods[value]().call();
	return Web3.utils.fromWei(result);
};

export default fetchingData;
export { fetchData };
