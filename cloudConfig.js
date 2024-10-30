<<<<<<< HEAD
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


//process.env is used to access the environment variables
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'wanderlust_DEV',
        allowedsFormat: ["png", "jpg", "jpeg", "gif"]
    },
});

module.exports = {
    cloudinary,
    storage
=======
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


//process.env is used to access the environment variables
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'wanderlust_DEV',
        allowedsFormat: ["png", "jpg", "jpeg", "gif"]
    },
});

module.exports = {
    cloudinary,
    storage
>>>>>>> 777db6b1bb1ef22660968d5968c122b921327a4a
}