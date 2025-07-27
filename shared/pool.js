const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "27041995",
    database: "estore1",
    port: 3306,
    multipleStatements: true,
});

module.exports = pool;
