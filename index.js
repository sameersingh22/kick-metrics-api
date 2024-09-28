import express from 'express';
import cors from 'cors'; 
import playersRoutes from './routes/playersRoutes.js';

const app = express();

app.use(cors()); 
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Kick Metrics API!</h1>

        <p>You can interact with the API directly using https://kick-metrics-api-a69304343da9.herokuapp.com/&lt;endpoint&gt;</p>
        
        <h2>Player Endpoints:</h2>
        <ul>
            <li><strong>GET /api/players</strong> - Returns a list of all players.</li>
            <li><strong>GET /api/players/:id</strong> - Returns detailed information for a specific player identified by id.</li>
            <li><strong>PUT /api/update/:id</strong> - Updates the goals and assists metrics for a player identified by id.</li>
        </ul>
        
        <h2>Team Endpoints:</h2>
        <ul>
            <li><strong>GET /api/teams/:id</strong> - Returns the team information and its associated players for the specified id.</li>
        </ul>
    `);
}); 

app.use('/api', playersRoutes); 

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    console.log('Press CTRL + C to stop server');
});
