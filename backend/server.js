const express = require("express");
const bodyParser = require("body-parser");
const db = require('./database/index');
const verifyToken = require('./middleware/verifyToken');
const cors = require("cors");
const user =require('./routes/user')
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('../dist'));

app.use("/user",user)
app.use("/items",require('./routes/items'))


app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:3000`);
});