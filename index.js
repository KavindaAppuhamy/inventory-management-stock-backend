import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import stockRouter from './routes/stockRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connected to database");
}).catch(() => {
    console.log("Database connection failed");
})

// Routes
app.use('/api/stock', stockRouter);

app.listen(5000,
    () => {
        console.log('Server is running on port 5000');
    }
);
