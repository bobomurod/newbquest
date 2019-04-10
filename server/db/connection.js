const monk = require('monk');

// const db = monk('localhost/auth-for-noobs');
const db = monk(process.env.DB);



module.exports = db;