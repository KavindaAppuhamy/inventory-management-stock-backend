import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();

app.use(bodyParser.json())

app.use(
    (req,res,next)=>{
        const tokenString = req.header("Authorization")
        if(tokenString != null){
            const token = tokenString.replace("Bearer ", "") 

            jwt.verify(token,process.env.JWT_KEY,
                (err,decoded)=>{
                    if(decoded != null){
                        req.user = decoded
                        next()
                    }
                    else{
                        console.log("invalid token")
                        res.status(403).json({
                            message : "Invalid token"
                        })
                    }
                }
            )
        }else{
            next()          
        }
    }
)

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connected to database");
}).catch(() => {
    console.log("Database connection failed");
})


const PORT = process.env.PORT || 5000;

app.listen(PORT,
    () => {
        console.log('Server is running on port ${PORT}');
    }
);
