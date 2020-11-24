const express = require('express');
const router = express.Router();
const User = require('../database/models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require("../config/auth.config.js")
const verifySignUp = require('../middleware/verifySignUp.js');
const nodemailer = require('nodemailer');
const email = require('../config/email.config')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email.email,
        pass: email.pass
    }
});

router.post('/signup', async (req, res) => {
    try {
        verifySignUp(req, res, async () => {
            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash(req.body.password, salt);
            const user = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: hashPass,
                email: req.body.email,
                dateOfBirth: req.body.dateOfBirth,
                country: req.body.country,
                phoneNumber: req.body.phoneNumber,
                status: "client",
                access: false
            })
            const mailOptions = await {
                from: `${email.email}`,
                to: `${req.body.email}`,
                subject: 'Thanks',
                text: 'thank you for choosing our site!',
                html: `<button onclick="()=>{alert('thank u')}"><a href="http://localhost:8080/signin"></a>verify</button>`,
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });
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
        if (!user.access) {
            return res.status(401).send({
                message: "verify your acount"
            })
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