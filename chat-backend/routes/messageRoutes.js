// routes/messageRoutes.js
const express = require('express');
const { createMessage, getMessages } = require('../controllers/messageController');
const { upload } = require('../controllers/fileController');

const router = express.Router();

router.post('/messages', upload.single('file'), createMessage);
router.get('/messages', getMessages);

module.exports = router;
