const express = require("express");
const bodyParser = require("body-parser");
const db = require('./database/index');
const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to bezkoder application."
    });
});

app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:3000`);
});