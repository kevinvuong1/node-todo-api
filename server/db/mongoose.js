const mongoose = require('mongoose');

// Tell mongoose which promise library to use
mongoose.Promise = global.Promise;

// Connect to database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };