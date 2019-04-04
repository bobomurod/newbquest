const db = require('../db/connection.js')
const shops = db.get('shops');
shops.createIndex('shopId', { unique: true });
shops.createIndex('shopId', { unique: true });

const express = require('express');

const router = express.Router();

router.get('/', (req, res,) => {
    res.json({
        message: "hello from Shops"
    })
});

router.post('/test', (req, res, next) => {
    shops.insert(req.body.shop).then(insertedShop => {
        res.json(insertedShop);
    })
     .catch((err) => {
        res.send(err);
        next();
    })
})

module.exports = router;
