//we love our users
const db = require('../db/connection');
const users = db.get('users');

const express = require('express');
const router = express.Router();



module.exports = router;