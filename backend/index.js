const express = require("express");

const dotenv = require("dotenv");
const databaseConnect = require("./config/databaseConfig");

//loading all the configurations in the process project
dotenv.config();

//initialize the server
const app = express();

const port = process.env.port;

databaseConnect();

//activate the server
app.listen(port, () => {
    console.log(`Server is working at port: ${port}`)
});

//default route
app.get('/', (req, res) => {
    res.send("Welcome to Lurxena Server");
});