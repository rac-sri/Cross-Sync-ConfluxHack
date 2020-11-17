import { RequestHandler, Request, Response } from 'express';
import { v4 as uuidV4 } from 'uuid';

import AppRegisteration from '../models/appRegisteration';

import { register, Iregister } from '../verificationSchema/appRegister';

const registerController: RequestHandler = async (
	req: Request,
	res: Response
) => {
	const { value, error } = register(req.body as Iregister);
	if (error) return res.send(error.details[0].message);
	const uniqueID = uuidV4();
	const newApp = await AppRegisteration.create({ ...value, uuid: uniqueID });
	res.send(newApp);
};

export { registerController };
