require('dotenv').config()

const mongoose = require('mongoose');
const chalk = require('chalk');

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(chalk.yellow('Server database connect Success!'))
    } catch(error){
        console.error("MongoDb Connection Fail")
        // ! JIKALAU GAGAL AKAN EXIT SERVER 
        process.exit(1)
    }
}

module.exports = connectDB;