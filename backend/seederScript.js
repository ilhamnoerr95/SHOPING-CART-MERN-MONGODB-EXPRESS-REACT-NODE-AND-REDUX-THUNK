// require('dotenv').config();

const productsData = require('./data/products.js');
const connectDB = require('./config/db.js');
const Product = require('./models/Products.js')

connectDB();

// IMPORT DATA DARI DATA.PRODUCT KE DATABASE MONGODB
const importData = async()=>{
    try {
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        console.log("DATA IMPORT SUCCESS!");

        process.exit();
    } catch (error) {
        console.error('Error Data Import')
        process.exit(1)
    }
};

importData();



// FILE INI HANYA MENJALANKAN FUNGIS PEMINDAHAN DATA KE DALAM MONGODB