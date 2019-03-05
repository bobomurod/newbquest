//const router = require('express').Router();

const Joi = require('joi');


const express = require('express');

const router = express.Router();

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(2).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email({ minDomainAtoms: 2 })
}).with('username', 'birthyear').without('password', 'access_token');
 

//const app = express()


router.get('/', (req, res,)=>{
    res.json({
        message: "hello from Auth"
    })
});

router.post('/signup', (req, res) => {
    console.log(req.body)
    res.json({
        // user: req.body.username,
        // password: req.body.password
        message: "Creating user"
    })
})

module.exports = router;