const express = require('express');
const { connectDB } = require('./config/db');
const app = express();
const server = require('http').Server(app);
require('dotenv').config();
const mongoose =  require('mongoose');



const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const orderRouter = require('./routes/order');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// DB connection
connectDB();
const db = mongoose.connection;

db.on('error', (error) => {
    console.error("Error has occurred!");
});

db.once('open', ()=> {
    console.log("DATABASE CONNECTED");
});







// Routes 
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);











server.listen(8080, () => {
    console.log("SERVER RUNNING ON PORT 8080");
});