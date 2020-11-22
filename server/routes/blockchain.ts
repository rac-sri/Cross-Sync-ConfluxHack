import * as express from 'express';

import { eth, cfx } from '../controllers/blockchain';

const router: express.Router = express.Router();

router.post('/eth', eth);
router.post('/cfx', cfx);

export default router;
