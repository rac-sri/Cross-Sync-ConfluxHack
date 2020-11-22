import { RequestHandler, Request, Response } from 'express';
import { web3 } from '../blockchainUtils/Ethereum/web3';
import {
	transferEquivalentAmountFn,
	redeemExchangeMoney,
} from '../blockchainUtils/Ethereum/utils/admin';
import {
	transferEquivalentAmountFn as transEquiCFX,
	redeemExchangeMoney as redeemExchangeMoneyCFX,
} from '../blockchainUtils/conflux/admin';

const eth = async (req: Request, res: Response) => {
	console.log(req.body);
	const tx = await web3.eth.getTransactionReceipt(req.body.tx);
	try {
		if (tx) {
			const state1 = await transEquiCFX(req.body.addr, req.body.value);
			const state2 = await redeemExchangeMoney(
				req.body.addrSelf,
				req.body.value
			);
			res.send({ state1, state2 });
			res.end();
		}
	} catch (e) {
		res.send(e);
		res.end();
	}
};

const cfx = async (req: Request, res: Response) => {
	const tx = await web3.eth.getTransactionReceipt(req.body.tx);
	console.log(req.body);
	try {
		if (tx) {
			const state1 = await transferEquivalentAmountFn(
				req.body.addr,
				req.body.value
			);
			const state2 = await redeemExchangeMoneyCFX(
				req.body.addrSelf,
				req.body.value
			);
			res.send({ state1, state2 });
			res.end();
		}
	} catch (e) {
		res.send(e);
		res.end();
	}
};

export { eth, cfx };
