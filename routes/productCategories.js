const express = require("express");
const mysql = require("mysql2");
const productCategories = express.Router();

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "27041995",
    database: "estore1",
    port: "3306",
    multipleStatement: true,
});

productCategories.get("/", (req, res) => {
    pool.query(
        "select * from categories",
        (error, categories) => {
            if (error) res.status(500).send(error);
            else res.status(200).send(categories);
        }
    );
});

module.exports = productCategories;

// app.get("/", (req, res) => {
//     pool.getConnection((err, connection) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             pool.query(
//                 "select * from categories",
//                 (error, categories) => {
//                     if (error) res.status(500).send(error);
//                     else res.status(200).send(categories);
//                 }
//             );
//         }
//     });
// });

// app.get("/", (req, res) => {
//     pool.getConnection((err, connection) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.status(200).send("Connection Estalished")
//         }
//     });
// });

// app.get("/", (req, res) => {
//     let prodData = {
//         pName: "Jacket",
//         price: 45,
//         img: "shop-1.jpg"
//     };
//     res.status(200).send(prodData);
// });

// const server = app.listen(PORT, () => {
//     console.log("App is running on the port - 5001");
// });