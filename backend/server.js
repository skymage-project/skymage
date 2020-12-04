const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index');
const verifyToken = require('./middleware/verifyToken');
const cors = require('cors');
const helmet = require('helmet');
var morgan = require('morgan');
const user = require('./routes/user');
const items = require('./routes/items');
const app = express();
const PORT = 3000 || process.env.PORT;

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

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
