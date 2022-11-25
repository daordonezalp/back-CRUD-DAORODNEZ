const {Pool} = require("pg");
const {db}= require ('./config.js')
const pool = new Pool({
    host: db.host,
    user: db.user,
    password: db.password,
    port: db.port,
    database:'', 

});

module.exports = pool;