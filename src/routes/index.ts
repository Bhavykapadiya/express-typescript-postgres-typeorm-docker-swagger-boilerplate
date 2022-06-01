import { Router } from 'express';

import page404 from './pages/404';
import pageRoot from './pages/root';
import device from './device';

const router = Router();

router.use(`/device`, device);

router.use(pageRoot);
router.use(page404);

export default router;
