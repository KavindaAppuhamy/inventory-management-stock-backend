import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import stockRouter from './routes/stockRoutes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connected to database");
}).catch(() => {
    console.log("Database connection failed");
})

// Routes
app.use('/api/stocks', stockRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT,
    () => {
        console.log('Server is running on port ${PORT}');
    }
);
