import express from 'express';
import auth from '../middleware/auth.js';
import { getAccountStats } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/stats',auth, getAccountStats);


export default userRouter;