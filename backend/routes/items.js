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

router.get("/img",async (req, res) => {
    await UrlPictures.findAll().then((items) => res.send(items));
})

// router.get("/desc",async (req, res) => {
//     await Description.findAll().then((items) => res.send(items));
// })

router.post('/add', async (req, res) => {
    try{
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

    const urlVideos= await UrlVideos.create({
        urlVideos : req.body.urlVideos
    })
    await item.setUrlVideos(urlVideos)
     res.json('added');
} catch (err) {console.log(err)}

})







module.exports = router;