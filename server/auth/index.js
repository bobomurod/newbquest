//const router = require('express').Router();
const bodyParser = require('body-parser');

const express = require('express');

const router = express.Router();
//const app = express()


//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded( { extended: false } ))

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