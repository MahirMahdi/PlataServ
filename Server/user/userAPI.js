import express from 'express';
import signup, { login, logout, refreshTokenHandler } from './userController.js';

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.get('/refresh', refreshTokenHandler);
router.post('/logout', logout);


export {router as userRouter};