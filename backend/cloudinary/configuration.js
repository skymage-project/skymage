const cloudinary = require('cloudinary').v2;
const cloud = require('../config/cloudinary.config');


cloudinary.config({
    cloud_name: 'skymage',
    api_key: "475172826588341",
    api_secret: "t_n18PuWw0nPxtO9TBbZQbW_af4"
})

module.exports={cloudinary};