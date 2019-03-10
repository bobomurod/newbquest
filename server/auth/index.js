//const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const webToken = require('jsonwebtoken');
const db = require('../db/connection.js');
const users = db.get('users');
users.createIndex('username', { unique: true });

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
            if (user) {

                console.log('Username ' + req.body.username + ' is exist and an id is ' + user._id);

                const error = new Error('Username exists, please choose another username');
                res.status(500)
                next(error);
                // res.json({
                //     message: "Username exists, please choose another username"
                // })
                
            } else {
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
            }
        })
    } else {
        res.status(422)
        next(result.error);
    }

    // res.json({
    //     user: req.body.username,
    //     password: req.body.password,
    //     message: "Creating user"
    // })

})

router.post('/login', (req, res, next) => {
    const result = Joi.validate(req.body, schema)

    if (result.error === null) {
        users.findOne({
            username: req.body.username
        }).then(user => {
            if (user) {
                bcrypt
                .compare(req.body.password, user.password)
                .then(result => {
                   if (result) {
                       const payload = {
                           _id: user._id,
                           username: user.username
                       };
                       webToken.sign(payload, process.env.TOKEN_SECRET, {
                           expiresIn: '1d'
                       }, (err, token) => {
                           if (err) {
                            const error = new Error('Unable to login(token)');
                            res.status(422);
                            next(error);
                        } else {
                            res.json(token);
                           }
                       })
                   } else {
                    const error = new Error('Password incorrect');
                    res.status(422);
                    next(error);
                   }
                })
            } else {
                const error = new Error('Unable to login');
                res.status(422);
                next(error);
            }
        })
    }

})

module.exports = router;

