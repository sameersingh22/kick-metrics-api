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
