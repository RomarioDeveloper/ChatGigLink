// config/config.js
require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    dbUri: process.env.MONGO_URI || 'mongodb://localhost:27017/chatApp',
};

module.exports = config;
