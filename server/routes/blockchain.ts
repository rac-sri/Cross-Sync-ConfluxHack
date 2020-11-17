import * as express from 'express';

import { eth } from '../controllers/blockchain';

const router: express.Router = express.Router();

router.post('/eth', eth);

export default router;
