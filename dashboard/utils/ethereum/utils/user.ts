import Web3 from 'web3';
import log from './handlers.ts';

const depositToThePool = async (
	Contract: any,
	accounts: Array<String>,
	value: any
): Promise<any> => {
	Contract.methods
		.deposit()
		.send({ from: accounts[0], value: Web3.utils.toWei(value.toString()) })
		.once('transactionHash', console.log)
		.on('reciept', log)
		.once('error', log)
		.catch((e) => {
			throw 'wrong';
		});
};

const refundMoney = async (
	Contract: any,
	accounts: Array<String>,
	amount: Number
): Promise<any> => {
	console.log(Web3.utils.toWei(amount.toString()));
	Contract.methods
		.refund(accounts[0], Web3.utils.toWei(amount.toString()))
		.send({ from: accounts[0] })
		.once('transactionHash', console.log)
		.once('reciept', log)
		.once('error', log)
		.catch((e) => {
			throw 'wrong';
		});
};

const addExchangeMoney = async (
	Contract: any,
	accounts: Array<String>,
	overhead: Number,
	value
): Promise<any> => {
	const exchange = Contract.methods
		.addExchangeMoney(overhead)
		.send({ from: accounts[0], value: Web3.utils.toWei(value.toString()) });
	return exchange;
};

const addExchangeMoneyFromPool = async (
	Contract: any,
	accounts: Array<String>,
	overhead: Number,
	value
): Promise<any> => {
	Contract.method
		.addExchangeMoneyFromPool(Web3.utils.toWei(value.toString()), overhead)
		.send({ from: accounts[0] })
		.once('transactionHash', console.log)
		.once('reciept', log)
		.once('error', log)
		.catch((e) => {
			throw 'wrong';
		});
};

const collectRewards = async (
	Contract: any,
	accounts: Array<String>
): Promise<any> => {
	Contract.method
		.withdraw()
		.send({ from: accounts[0] })
		.once('transactionHash', console.log)
		.once('reciept', log)
		.once('error', log)
		.catch((e) => {
			throw 'wrong';
		});
};

export {
	depositToThePool,
	refundMoney,
	addExchangeMoney,
	addExchangeMoneyFromPool,
	collectRewards,
};
