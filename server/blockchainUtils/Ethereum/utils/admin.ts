import Web3 from 'web3';
import { loadWeb3 } from '../web3';

const transferEquivalentAmountFn = async (addr: String, value: Number) => {
	const { accounts, contract } = await loadWeb3();
	const result = await contract.methods
		.transferEquivalentAmount(addr, Web3.utils.toWei(value.toString()))
		.send({
			from: accounts[0],
		});
	return result;
};
const redeemExchangeMoney = async (addr: String, value: Number) => {
	const { accounts, contract } = await loadWeb3();
	const result = await contract.methods
		.redeemExchangeMoney(addr, Web3.utils.toWei(value.toString()))
		.send({
			from: accounts[0],
		});
	return result;
};

export { transferEquivalentAmountFn, redeemExchangeMoney };
