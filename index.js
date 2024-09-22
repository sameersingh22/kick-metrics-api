import express from 'express';
import cors from 'cors'; 
import playersRoutes from './routes/playersRoutes.js';

const app = express();

app.use(cors()); 
app.use(express.json()); 

app.use('/api', playersRoutes); 

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});