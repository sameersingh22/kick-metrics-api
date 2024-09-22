import express from 'express';
import { getPlayersData } from '../controllers/playersControllers.js';

const router = express.Router();

router.get('/', getPlayersData);
export default router;
