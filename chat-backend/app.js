// app.js
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const messageRoutes = require('./routes/messageRoutes');

const app = express();

// Подключение к MongoDB
mongoose.connect(config.dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Middleware для обработки JSON и URL-кодированных данных
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Маршруты
app.use('/api', messageRoutes);

// Статические файлы (загруженные файлы)
app.use('/uploads', express.static('uploads'));

// Запуск сервера
const port = config.port;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
