//const router = require('express').Router();

const Joi = require('joi');
const db = require('../db/connection.js')
const users = db.get('users');
users.createIndex('username', { unique: true });

const express = require('express');

const router = express.Router();

const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_]*$)/).min(2).max(30).required(),
    // username: Joi.string().alphanum().min(2).max(30).required(),
    // password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    password: Joi.string().min(3).max(6).required()
});
 

//const app = express()


router.get('/', (req, res,)=>{
    res.json({
        message: "hello from Auth"
    })
});

router.post('/signup', (req, res) => {
    console.log(req.body)
    const result = Joi.validate(req.body, schema)
    // res.json({
    //     user: req.body.username,
    //     password: req.body.password,
    //     message: "Creating user"
    // })

    res.json(result)
})

module.exports = router;


