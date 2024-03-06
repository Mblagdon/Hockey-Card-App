const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: String,
    year: String,
    collection: String,
    series: String,
    isCollected: { type: Boolean, default: false },
});

module.exports = mongoose.model('Card', cardSchema);
