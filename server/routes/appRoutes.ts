import * as express from 'express';

import { registerController } from '../controllers/appRegisteration';

const router: express.Router = express.Router();

router.post('/new', registerController);

export default router;
