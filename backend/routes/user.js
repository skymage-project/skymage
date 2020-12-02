const express = require('express');
const router = express.Router();
const User = require('../database/models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const verifySignUp = require('../middleware/verifySignUp.js');
const nodemailer = require('nodemailer');
const email = require('../config/email.config');
const multer = require('multer');
const path = require('path');

const { cloudinary } = require('../cloudinary/configuration');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: email.email,
		pass: email.pass,
	},
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
				status: 'client',
				access: false,
				img: req.body.img,
				address: req.body.address,
				company: req.body.company,
				addressOptional: req.body.addressOptional,
				postalCode: req.body.postalCode,
				city: req.body.city,
				shippingRate: req.body.shippingRate,
				creditCardNumber: req.body.creditCardNumber,
				expirationCardDate: req.body.expirationCardDate,
				securityCode: req.body.securityCode,
			});
			const mailOptions = await {
				from: `${email.email}`,
				to: `${req.body.email}`,
				subject: 'Thanks',
				text: 'Thank you for choosing our site!',
				html: `<div style='text-align:center'>
                <h1> Hi ${user.firstName}+ ${user.lastName}</h1>
                <h4>Please verify that your email address is ${req.body.email}</h4>
                <h4>and that you entered it when signin up for SkyMage</h4>
                <form action="http://localhost:3000/user/email/${user.id}" method="post">
                        <label for="fname">Verify your account</label>
                         <input type="submit" value="Verify">
                       </form></div>`,
			};

			transporter.sendMail(mailOptions, function(error, info) {
				if (error) {
					console.log(error);
				} else {
					console.log('Email sent: ' + info.response);
				}
			});

			res.status(200).send({
				message: 'Email sent',
			});
		});
	} catch (err) {
		res.status(500).send({
			message: err.message,
		});
	}
});

router.post('/signin', async (req, res) => {
	try {
		const user = await User.findOne({
			where: {
				email: req.body.email,
			},
		});
		if (!user) {
			return res.status(404).send({
				message: 'User Not found.',
			});
		}
		const validPass = await bcrypt.compare(req.body.password, user.password);
		if (!validPass) {
			return res.status(401).send({
				accessToken: null,
				message: 'Invalid Password!',
			});
		}
		if (!user.access) {
			return res.status(401).send({
				message: 'verify your acount',
			});
		}
		const token = jwt.sign(
			{
				id: user.id,
			},
			config.secret,
			{
				expiresIn: 86400, // 24 hours
			}
		);
		res.header('accessToken', token).send({
			accessToken: token,
			id: user.id,
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
			dateOfBirth: user.dateOfBirth,
			country: user.country,
			phoneNumber: user.phoneNumber,
			status: user.status,
			img: user.img,
			wishList: user.wishList,
			purchasedItems: user.purchasedItems,
			address: user.address,
			company: user.company,
			addressOptional: user.addressOptional,
			postalCode: user.postalCode,
			city: user.city,
			shippingRate: user.shippingRate,
			creditCardNumber: user.creditCardNumber,
			expirationCardDate: user.expirationCardDate,
			securityCode: user.securityCode,
		});
	} catch (err) {
		res.status(500).send({
			message: err.message,
		});
	}
});

router.post('/email/:id', async (req, res) => {
	const user = await User.findOne({
		where: {
			id: req.params.id,
		},
	});
	const updated = await User.update(
		{
			access: true,
		},
		{
			where: {
				id: user.id,
			},
		}
	);
	res.send(`<h1>Welcome to Skymage comunity </h1>
            <h3>thanks for verifying your account now u can login to our <a href="http://localhost:8080/signin">website</a></h3>
                                                                                    `);
});

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'tmp');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});
const fileFilter = (req, file, cb) => {
	if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
		cb(null, true);
	} else {
		cb(null, false);
	}
};
const upload = multer({
	storage: storage,
	fileFilter: fileFilter,
});

router.put('/upload/:id', upload.single('image'), async (req, res, next) => {
	try {
		const result = await cloudinary.uploader.upload(req.file.path);
		res.json({
			url: result.url,
		});
		const user = await User.update(
			{
				img: result.url,
			},
			{
				where: {
					id: req.params.id,
				},
			}
		);
	} catch (error) {
		console.error(error);
	}
});


router.post('/message', async (req, res)=>{
    try{
        
    const mailOptions = await {
        from: `${req.body.email}`,
        to: `${email.email}`,
        subject: `Feedback from ${req.body.name}`,
        text: `${req.body.message}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.status(200).send({
        message: 'Email sent',
    });
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }

})

module.exports = router;
