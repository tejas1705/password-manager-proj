const express = require("express")
const app = express();
const PORT=3001;
const mysql=require('mysql')

const db=mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'passwordmanager',
});

app.get("/", (req,res)=>{
    res.send("Hello Wor");
});

app.listen(PORT, ()=>{
    console.log("server is running");
});