const express = require("express");
const app = express();
const mysql = require('mysql');
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "userdb",
})

app.use(express.json());

app.get("/users", (_req, res) =>{
    db.query("SELECT * FROM users;",
    (err, result) =>{
        if (err){
            res.status(400).json(err);
        } else {
            res.status(200).json(result);   
        }
    });
});

app.put("/users", (_req, _res) => {});

app.post("/users", (req, res) => {
    const {name, age} = req.body

    db.query(
        "INSERT INTO users (name, age) VALUES (,);",
        [name, age],
    (err, result) => {
        if (err){
            res.status(400).json(err);
        } else {
            res.status(200).json(result);   
        }
    }
    );
});

app.delete("/users/:id", (_req, _res) => {});

app.listen("3001", ( ) => {
    console.log("Server running on port 3001");
});