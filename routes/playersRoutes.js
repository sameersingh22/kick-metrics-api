import express from 'express';
import { getPlayersData, getPlayerById, updatePlayerMetrics } from '../controllers/playersControllers.js';
import { getTeamData } from '../controllers/teamsControllers.js';

const router = express.Router();

router.get('/', getPlayersData);
router.get('/players', getPlayersData);

router.get('/:id', getPlayerById);
router.get('/players/:id', getPlayerById);

router.put('/update/:id', updatePlayerMetrics);

router.get('/teams/:id', getTeamData);

export default router;