const express=require('express');
const app=express();
const signUp=require('./routes/signin');
const mongoose=require('mongoose');
const dotenv=require('dotenv')
const cors = require('cors')

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true , useUnifiedTopology: true},()=>{
    console.log('Connected to db');
})

app.use(cors());

app.use(express.json());

const port=process.env.port || 3001;

app.use('/api/user',signUp);

app.listen(port,()=>{
    console.log("Server is up");
})