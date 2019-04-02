const db = require('../db/connection.js')
const products = db.get('shops');
products.createIndex('shopId', { unique: true });

const express = require('express');

const router = express.Router();
router.get('/', (req, res,) => {
    res.json({
        message: "hello from Shops"
    })
});

module.exports = router;
