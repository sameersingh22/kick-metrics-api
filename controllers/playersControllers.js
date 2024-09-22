import { promises as fs } from 'fs';
import path from 'path';

export const getPlayersData = async (req, res) => {
    try {
        const filePath = path.resolve('data', 'playersData.json');
        const data = await fs.readFile(filePath, 'utf-8');
        const playersData = JSON.parse(data);
        res.status(200).json(playersData);
    } catch (error) {
        res.status(500).json({ message: 'Error reading players data', error });
    }
};

export const getPlayerById = async (req, res) => {
    try {
        const filePath = path.resolve('data', 'playersData.json');
        const data = await fs.readFile(filePath, 'utf-8');
        const playersData = JSON.parse(data);

        const playerId = parseInt(req.params.id, 10);
        let player = null;

        for (const teamId in playersData) {
            const foundPlayer = playersData[teamId].find(p => p.id === playerId);
            if (foundPlayer) {
                player = foundPlayer;
                break;
            }
        }

        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }

        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching player data', error });
    }
};

export const updatePlayerMetrics = async (req, res) => {
    try {
        const filePath = path.resolve('data', 'playersData.json');
        const data = await fs.readFile(filePath, 'utf-8');
        const playersData = JSON.parse(data);

        const playerId = parseInt(req.params.id, 10);
        const { goals, assists } = req.body;

        if (!playersData) {
            return res.status(404).json({ message: 'Players data not found' });
        }

        let playerFound = false;
        for (const teamId in playersData) {
            const playerIndex = playersData[teamId].findIndex(p => p.id === playerId);
            if (playerIndex !== -1) {
                playersData[teamId][playerIndex].goals = goals;
                playersData[teamId][playerIndex].assists = assists;
                playerFound = true;
                break;
            }
        }

        if (!playerFound) {
            return res.status(404).json({ message: 'Player not found' });
        }

        await fs.writeFile(filePath, JSON.stringify(playersData, null, 2));
        res.status(200).json({ message: 'Player metrics updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating player metrics', error });
    }
};
