import { promises as fs } from 'fs';
import path from 'path';

export const getTeamData = async (req, res) => {
    try {
        const filePath = path.resolve('data', 'playersData.json');
        const data = await fs.readFile(filePath, 'utf-8');
        const playersData = JSON.parse(data);

        const teamId = req.params.id;
        const teamPlayers = playersData[teamId];

        if (!teamPlayers) {
            return res.status(404).json({ message: 'Team not found' });
        }

        const teamName = `Team ${teamId}`;
        
        res.status(200).json({ id: teamId, name: teamName, players: teamPlayers });
    } catch (error) {
        res.status(500).json({ message: 'Error reading team data', error });
    }
};