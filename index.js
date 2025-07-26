const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = 5001;

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "27041995",
    database: "estore1",
    port: "3306",
    multipleStatement: true,
});

app.get("/", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("Connection Estalished")
        }
    });
});



const server = app.listen(PORT, () => {
    console.log("App is running on the port - 5001");
});



// app.get("/", (req, res) => {
//     let prodData = {
//         pName: "Jacket",
//         price: 45,
//         img: "shop-1.jpg"
//     };
//     res.status(200).send(prodData);
// });