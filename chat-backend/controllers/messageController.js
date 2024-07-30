// controllers/messageController.js
const Message = require('../models/Message');

const createMessage = async (req, res) => {
    try {
        const { sender, text } = req.body;
        const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;

        const message = new Message({ sender, text, fileUrl });
        await message.save();

        res.status(201).json({ success: true, message });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ timestamp: -1 });
        res.status(200).json({ success: true, messages });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { createMessage, getMessages };
