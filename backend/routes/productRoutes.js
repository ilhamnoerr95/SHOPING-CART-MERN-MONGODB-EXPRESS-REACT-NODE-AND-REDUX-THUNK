const express = require('express');
const router = express.Router();
const {getAllProducts, getProductById} = require('../controller/productControllers')


// @desc GET ALL PRODUCTS FROM DB
// @route GET /API/PRODUCTS
// @access public
router.get('/', getAllProducts)

// @desc GET a Products by id from Db
// @route GET /API/PRODUCTS/:id
// @access public
router.get('/:id', getProductById)

module.exports = router;