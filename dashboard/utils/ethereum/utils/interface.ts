import Web3 from 'web3';
import log from './handlers.ts';

const overheadPercentageValue = async (
	Contract: any,
	value: Number,
	overHeadPercent: Number
) => {
	const result = await Contract.methods
		.overheadPercentageValue(
			Web3.utils.toWei(value.toString()),
			overHeadPercent.toString()
		)
		.call();
	console.log(Web3.utils.fromWei(result.toString()));
	return Web3.utils.fromWei(result.toString());
};

const updateBalance = async (
	Contract: any,
	accounts: Array<String>,
	address: String,
	interest: Number,
	time: Number
) => {
	Contract.methods
		.updateBalance(address, interest, time)
		.send({ from: accounts[0] })
		.once('reciept', log)
		.once('error', log);
};

const moneyRecievedByLiquidator = async (
	Contract: any,
	accounts: Array<String>
) => {
	const result = await Contract.methods
		.moneyRecievedByLiquidator(accounts[0])
		.call();
	console.log(Web3.utils.fromWei(result.toString()));
	return Web3.utils.fromWei(result.toString());
};

export { moneyRecievedByLiquidator, updateBalance, overheadPercentageValue };
