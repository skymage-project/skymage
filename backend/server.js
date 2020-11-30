const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index');
const verifyToken = require('./middleware/verifyToken');
<<<<<<< HEAD
const cors = require('cors');
const helmet = require('helmet');
var morgan = require('morgan');
const user = require('./routes/user');
const items = require('./routes/items');
=======
const cors = require("cors");
const helmet = require("helmet");
var morgan = require('morgan');
const user =require('./routes/user');
>>>>>>> a92de550e4c99e99b930c210fcb758f81d0ff2ad
const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan('combined'));

app.use(bodyParser.json());

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(express.static('../dist'));

app.use('/user', user);
app.use('/items', items);

app.listen(3000, () => {
	console.log(`Server is running on port http://localhost:3000`);
});
