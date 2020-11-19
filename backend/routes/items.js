const express = require('express');
const router = express.Router();
const db = require('../database/models/index');
const Item = db.items;
const Description = db.descriptions;


router.get('/', async (req, res) => {
    await Item.findAll().then((items) => res.send(items));
})









module.exports = router;