import { RequestHandler, Request, Response } from 'express';
import { web3 } from '../blockchainUtils/Ethereum/web3';
import { toWei, Units } from '@harmony-js/utils';
import { hmy, contract } from '../blockchainUtils/Harmony/apiV2';
import admin from '../blockchainUtils/Ethereum/utils/admin';

const eth = async (req: Request, res: Response) => {
	const tx = web3.eth.getTransactionReceipt(req.body.tx);
	if (tx) admin(req.body.addr, req.body.value);
};

const one = async (req: Request, res: Response) => {
	console.log('fdsfj');
	const value = await hmy.blockchain.getTransactionByHash({
		txHash: req.body.tx,
	});

	console.log(value);
	if (value) {
		const tx = contract.methods.transferEquivalentAmount(
			req.body.addr,
			toWei(req.body.value, Units.one)
		);
		console.log(tx);
	}
};

export { eth, one };
