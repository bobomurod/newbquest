const router = require('express').Router();

// const express = require('express');

// const router = express.Router();

router.get('/', (req, res,)=>{
    res.json({
        message: "hello from Auth"
    })
});

module.exports = router;