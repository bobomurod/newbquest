//const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const db = require('../db/connection.js')
const users = db.get('users');
users.createIndex('username', { unique: true });34

const express = require('express');

const router = express.Router();

const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_]*$)/).min(2).max(30).required(),
    // username: Joi.string().alphanum().min(2).max(30).required(),
    // password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    password: Joi.string().trim().min(3).max(6).required()
});
 

//const app = express()

// any rout in here is pre-pended with /auth
router.get('/', (req, res,)=>{
    res.json({
        message: "hello from Auth"
    })
});

router.post('/signup', (req, res, next) => {
    console.log(req.body)
    const result = Joi.validate(req.body, schema)

    if (result.error === null) {
        //make sure username is unique
        users.findOne({
            username: req.body.username
        }).then(user => {
            //if user is undefined, username is not in the db, otherwise, duplicate user detected
            if (user == undefined) {
                console.log('Username ' + req.body.username +' is unique in db');
                bcrypt.hash(req.body.password, 12).then(hashedPassword => {
                    const newUser = {
                        username: req.body.username,
                        password: hashedPassword
                    };
                    users.insert(newUser).then(insertedUser => {
                        delete insertedUser.password
                        res.json(insertedUser)
                    })
                })
                // res.json({
                //     userid: user._id
                // })
            } else {
                console.log('Username ' + req.body.username + ' is exist and an id is ' + user._id);

                const error = new Error('Username exists, please choose another username');
                next(error);
                // res.json({
                //     message: "Username exists, please choose another username"
                // })
            }
        })
    } else {
        next(result.error);
    }

    // res.json({
    //     user: req.body.username,
    //     password: req.body.password,
    //     message: "Creating user"
    // })

})

module.exports = router;

