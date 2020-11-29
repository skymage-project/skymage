const cloudinary = require('cloudinary').v2;
const cloud = require('../config/cloudinary.config');


cloudinary.config({
    cloud_name: cloud.Cloud_name,
    api_key: cloud.API_Key,
    api_secret: cloud.API_Secret
})

module.exports={cloudinary};