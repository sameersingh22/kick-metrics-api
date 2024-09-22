import express from 'express';
import { getPlayersData, updatePlayerMetrics } from '../controllers/playersControllers.js';

const router = express.Router();

router.get('/', getPlayersData);
router.put('/update/:id', updatePlayerMetrics);

export default router;
