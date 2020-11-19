const express = require('express');
const router = express.Router();
const User = require('../database/models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require("../config/auth.config.js")
const verifySignUp = require('../middleware/verifySignUp.js');

router.post('/signup', async (req, res) => {
    try {
        verifySignUp(req, res, async() => {
            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash(req.body.password, salt);
            await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: hashPass,
                email: req.body.email,
                dateOfBirth: req.body.dateOfBirth,
                country: req.body.country,
                phoneNumber: req.body.phoneNumber,
                status: "client"
            }).then((user) => res.json(user))
        });
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
})


router.post('/signin', async (req, res) => {
    console.log(req.body)
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
        const token = jwt.sign({
            id: user.id
        }, config.secret, {
            expiresIn: 86400 // 24 hours
        });
        res.header('accessToken', token).send({
            "accessToken": token,
            "id": user.id,
            username: user.username,
            email: user.email,
        })
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
})


module.exports = router;