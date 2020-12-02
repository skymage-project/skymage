const express = require('express');
const router = express.Router();
const db = require('../database/models/index');
const User = db.users;
const Item = db.items;
const Description = db.descriptions;
const Feedback = db.Feedback;
const UrlPictures = db.UrlPictures;
const UrlVideos = db.UrlVideos;
const WishList = db.wishlists;

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
router.post('/addAll', async (req, res) => {
	for (var i = 0; i < req.body.length; i++) {
		try {
			const item = await Item.create({
				name: req.body[i].name,
				category: req.body[i].category,
				price: req.body[i].price,
				quickDescription: req.body[i].quickDescription,
				difficulty: req.body[i].difficulty,
				author: req.body[i].author,
				quantity: req.body[i].quantity,
				color: req.body[i].color,
				size: req.body[i].size,
			});

			const description = await Description.create({
				descriptionText: req.body[i].descriptionText,
				descriptionTitle: req.body[i].descriptionTitle,
				descriptionInstruction: req.body[i].descriptionInstruction,
			});
			await item.setDescription(description);

			const feedback = await Feedback.create({
				feedbackUserName: req.body[i].feedbackUserName,
				feedbackRating: req.body[i].feedbackRating,
				feedbackComment: req.body[i].feedbackComment,
				feedbackDate: req.body[i].feedbackDate,
			});
			await item.setFeedbacks(feedback);

			if (Array.isArray(req.body[i].urlPictures)) {
				for (var j = 0; j < req.body[i].urlPictures.length; j++) {
					var urlPictures = await UrlPictures.create({
						urlPictures: req.body[i].urlPictures[j],
					});
					await item.addUrlPictures(urlPictures);
				}
			} else {
				var urlPictures = await UrlPictures.create({
					urlPictures: req.body[i].urlPictures,
				});
				await item.addUrlPictures(urlPictures);
			}

			const urlVideos = await UrlVideos.create({
				urlVideos: req.body[i].urlVideos,
			});
			await item.setUrlVideos(urlVideos);
			res.json('item' + i + 'added on ' + req.body.length + 'items');
		} catch (err) {
			console.log(err);
		}
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
				console.log(items);
				items[0].addUser(items[0].dataValues.id, user[0].dataValues.id);
				res.json('purchased');
			});
		});
	} catch (err) {
		console.log(err);
	}
});

router.post('/addItemToWishList', async (req, res) => {
	try {
		const wish = await WishList.create({
			ItemId: req.body.ItemId,
			UserId: req.body.UserId,
		});
		res.json(
			'item' +
				req.body.ItemId +
				'added on wishlist of ' +
				req.body.UserId +
				'items'
		);
	} catch (err) {
		res.send(err);
	}
});

router.delete('/removeItemFromWishList', async (req, res) => {
	try {
		const removeWish = await WishList.destroy({
			where: { ItemId: req.body.ItemId, UserId: req.body.UserId },
		});
		res.json(removeWish);
	} catch (err) {
		res.send(err);
	}
});

router.post('/fetchWishList', async (req, res) => {
	try {
		const wishListItems = await WishList.findAll({
			where: {
				UserId: req.body.UserId,
			},
		});
		res.json(wishListItems);
	} catch (err) {
		res.send(err);
	}
});
router.post('/fetchItemsWishList', async (req, res) => {
	try {
		let arrayOfIds = [];
		for (var i = 0; i < req.body.ArrayOfItems.length; i++) {
			arrayOfIds.push(req.body.ArrayOfItems[i].ItemId);
		}
		const wishListItemsDetails = await Item.findAll({
			where: {
				id: arrayOfIds,
			},
			include: { all: true },
		});
		res.json(wishListItemsDetails);
	} catch (err) {
		res.send(err);
	}
});

module.exports = router;
