const express = require('express');
const router = express.Router();
const db = require('../database/models/index');
const Item = db.items;
const Description = db.descriptions;
const Feedback = db.Feedback;
const UrlPictures = db.UrlPictures;
const UrlVideos = db.UrlVideos;

router.get('/', async (req, res) => {
    await Item.findAll().then((items) => res.send(items));
})

router.post('/add', async (req, res) => {
    const item = await Item.create({
        name: req.body.name,
        price: req.body.price,
        difficulty: req.body.difficulty,
        author: req.body.author,
        quantity: req.body.quantity,
        color: req.body.color,
        size: req.body.size
    })
    const description = await Description.create({
        text: req.body.text,
        title: req.body.title,
        instruction: req.body.instruction
    })
    await item.setDescription(description)

    const feedback = await Feedback.create({
        userName: req.body.userName,
        rating: req.body.rating,
        comment: req.body.comment,
        date: req.body.date
    })
    await item.setFeedbacks(feedback)

    const urlPictures = await UrlPictures.create({
        urlPictures : req.body.urlPictures
    })
    await item.setUrlPictures(urlPictures)

    const urlVideos = await UrlVideos.create({
        urlVideos : req.body.urlVideos
    })
    await item.setUrlVideos(urlVideos)
    return res.json('added');

})







module.exports = router;