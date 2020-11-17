import { RequestHandler, Request, Response } from 'express';
import { web3 } from '../blockchainUtils/Ethereum/web3';
import admin from '../blockchainUtils/Ethereum/utils/admin';

const eth = async (req: Request, res: Response) => {
	const tx = web3.eth.getTransactionReceipt(req.body.tx);
	if (tx) admin(req.body.addr, req.body.value);
};

export { eth };
