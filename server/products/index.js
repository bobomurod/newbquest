const db = require('../db/connection.js')
const products = db.get('products');
products.createIndex('productId', { unique: true });

const express = require('express');

const router = express.Router();
router.get('/', (req, res,)=>{
    res.json({
        message: "hello from Products"
    })
});

module.exports = router;
