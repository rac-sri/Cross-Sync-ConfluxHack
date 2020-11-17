import * as express from 'express';

import { eth, one } from '../controllers/blockchain';

const router: express.Router = express.Router();

router.post('/eth', eth);
router.post('/one', one);

export default router;
