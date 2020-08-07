const express = require('express');
const cors =require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//create express server
const app = express();
const port = process.env.PORT || 5000;

//CORS middleware
app.use(cors());
app.use(express.json());

//connecting to mongodb
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB Database Connection Success');
})

//add routes to url endpoints
const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/users');

app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);

//running the server
app.listen(port,()=>{
    console.log('The server is running in the port:', port);
})
