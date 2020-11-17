const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require("../config/auth.config.js")
const verifyToken = require('../middleware/verifyToken');

router.post('/signup', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashPass,
            email: req.body.email,
            dateOfBirth: req.body.yearOfBirth,
            country: req.body.country,
            phoneNumber: req.body.phoneNumber,
            status: "client"
        }).then((user) => res.json(user))
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
})


router.post('/signin', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) {
            return res.status(404).send({
                message: "User Not found."
            });
        }
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        const token = jwt.sign({ id: user.id },config.secret);
        res.header('accessToken', token).send({"accessToken" : token , "id" : user.id})
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
})