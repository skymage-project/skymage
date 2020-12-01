const express = require('express');
const router = express.Router();
const db = require('../database/models/index');
const User = db.users;
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
			descriptionText: req.body.descriptionText,
			descriptionTitle: req.body.descriptionTitle,
			descriptionInstruction: req.body.descriptionInstruction,
		});
		await item.setDescription(description);

		const feedback = await Feedback.create({
			feedbackUserName: req.body.feedbackUserName,
			feedbackRating: req.body.feedbackRating,
			feedbackComment: req.body.feedbackComment,
			feedbackDate: req.body.feedbackDate,
		});
		await item.setFeedbacks(feedback);

		if (Array.isArray(req.body.urlPictures)) {
			for (var i = 0; i < req.body.urlPictures.length; i++) {
				var urlPictures = await UrlPictures.create({
					urlPictures: req.body.urlPictures[i],
				});
				await item.addUrlPictures(urlPictures);
			}
		} else {
			var urlPictures = await UrlPictures.create({
				urlPictures: req.body.urlPictures,
			});
			await item.addUrlPictures(urlPictures);
		}

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
			Item.findAll({
				where: {
					id: req.body.listOfItemsId,
				},
			}).then((items) => {
				console.log('ttttttttttttt');
				console.log(items);
				items[0].addUser(items[0].dataValues.id, user[0].dataValues.id);
				res.json('purchased');
			});
		});
	} catch (err) {
		console.log(err);
	}
});
module.exports = router;
