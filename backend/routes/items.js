const express = require('express');
const router = express.Router();
const db = require('../database/models/index');
const User = require('../database/models/user');
const Item = db.items;
const Description = db.descriptions;
const Feedback = db.Feedback;
const UrlPictures = db.UrlPictures;
const UrlVideos = db.UrlVideos;

router.get('/', async (req, res) => {
	await Item.findAll({ include: { all: true } }).then((items) =>
		res.send(items)
	);
});

router.get('/img', async (req, res) => {
	await UrlPictures.findAll().then((items) => res.send(items));
});

// router.get("/desc",async (req, res) => {
//     await Description.findAll().then((items) => res.send(items));
// })

router.post('/add', async (req, res) => {
	try {
		const item = await Item.create({
			name: req.body.name,
			category: req.body.category,
			price: req.body.price,
			quickDescription: req.body.quickDescription,
			difficulty: req.body.difficulty,
			author: req.body.author,
			quantity: req.body.quantity,
			color: req.body.color,
			size: req.body.size,
		});
		const description = await Description.create({
			descriptionText: req.body.text,
			descriptionTitle: req.body.title,
			descriptionInstruction: req.body.instruction,
		});
		await item.setDescription(description);

		const feedback = await Feedback.create({
			feedbackUserName: req.body.userName,
			feedbackRating: req.body.rating,
			feedbackComment: req.body.comment,
			feedbackDate: req.body.date,
		});
		await item.setFeedbacks(feedback);

		const urlPictures = await UrlPictures.create({
			urlPictures: req.body.urlPictures,
		});
		await item.setUrlPictures(urlPictures);

		const urlVideos = await UrlVideos.create({
			urlVideos: req.body.urlVideos,
		});
		await item.setUrlVideos(urlVideos);
		res.json('added');
	} catch (err) {
		console.log(err);
	}
});

router.post('/purchase', async (req, res) => {
	try {
		User.findAll({
			where: {
				id: req.body.userID,
			},
		}).then((user) => {
			user.setItems(req.body.ItemsBought).then((res) => {
				console.log(res);
			});
		});
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
