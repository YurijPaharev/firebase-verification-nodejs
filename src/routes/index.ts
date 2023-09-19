import express, { Router } from 'express';
import productRoute from './product';
import userRoute from './user';
import { validateAuth } from '../helpers/auth';

const router: Router = express.Router();

// Route that is protected by auth validation
router.use('/product', validateAuth, productRoute);
// Route that is protected by auth validation
router.use('/user', validateAuth, userRoute);

export default router;