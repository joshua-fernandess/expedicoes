
import express from 'express';
import connectDB from './config/db.js'
import expeditionRouter from './routers/expeditionRouter.js';
import explorerRouter from './routers/explorerRouter.js';
import speciesRouter from './routers/speciesRouter.js';


connectDB();


const app = express();
app.use(express.json());

app.use('/expeditions', expeditionRouter);
app.use('/explorers', explorerRouter);
app.use('/species', speciesRouter);

app.listen(3000, () => console.log('Server running on port 3000'));

