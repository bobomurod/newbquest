const db = require('../db/connection.js')
const shops = db.get('shops');
shops.createIndex('name', { unique: true });
shops.createIndex('subdomain', { unique: true });

const express = require('express');

const router = express.Router();

router.get('/', (req, res,) => {
    res.json({
        message: "hello from Shops"
    })
});

router.post('/create', (req, res, next) => {
    shops.insert(req.body.shop).then(insertedShop => {
        res.json(insertedShop);
    })
     .catch((err) => {
        res.send(err);
        next();
    })
})

router.get('/:name', (req, res, next) => {
    shops.findOne({name: req.params.name}).then(shop => {
        res.json(shop);
    })
})


//надо закончить
router.post('/edit', (req, res, next) => {
    //route for editing shop details
})

router.post('/admin', (req, res, next) => {
    //route to admin shop
})

module.exports = router;
