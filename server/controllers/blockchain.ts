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
			await transEquiCFX(req.body.addr, req.body.value);
			await redeemExchangeMoney(req.body.addrSelf, req.body.value);
			res.send('success');
			res.end();
		}
	} catch (e) {
		res.send(e);
		res.end();
	}
};

const cfx = async (req: Request, res: Response) => {
	const tx = await web3.eth.getTransactionReceipt(req.body.tx);

	try {
		if (tx) {
			await transferEquivalentAmountFn(req.body.addr, req.body.value);
			await redeemExchangeMoneyCFX(req.body.addrSelf, req.body.value);
			res.send('success');
			res.end();
		}
	} catch (e) {
		res.send(e);
		res.end();
	}
};

export { eth, cfx };
