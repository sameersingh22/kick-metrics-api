import express from 'express';
import cors from 'cors'; 
import playersRoutes from './routes/playersRoutes.js';

const app = express();

const cors = require('cors');
app.use(cors()); 
app.use(express.json()); 

app.use('/api', playersRoutes); 

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});