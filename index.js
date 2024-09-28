import express from 'express';
import cors from 'cors'; 
import playersRoutes from './routes/playersRoutes.js';

const app = express();

app.use(cors()); 
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send(`
        Welcome to the Kick Metrics API! 

        Player Endpoints:
          GET /api/players 
            Returns a list of all players.
          
          GET /api/players/:id 
            Returns detailed information for a specific player identified by id.
          
          PUT /api/update/:id 
            Updates the goals and assists metrics for a player identified by id.

        Team Endpoints:
          GET /api/teams/:id 
            Returns the team information and its associated players for the specified id.
    `);
}); 

app.use('/api', playersRoutes); 

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    console.log('Press CTRL + C to stop server');
});
