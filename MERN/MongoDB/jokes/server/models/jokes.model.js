const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: String,
        punchline: String,
    },
    { timestamps: true }
);

const joke = mongoose.model('joke', JokeSchema);

module.exports = joke;