// require('dotenv').config();
const productRoutes= require('./routes/productRoutes')
// CONNECT MONGODB
const connectDB = require('./config/db');

connectDB()

const chalk = require('chalk');
const express = require('express');

const app = express();

// MIDDLEWARE
app.use(express.json());
// routes api
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(chalk.keyword('blue')(`server runing on port ${PORT}`))});