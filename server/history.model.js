const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let History = new Schema({
    hist_date: {
        type: String
    },
    hist_ppg: {
        type: String
    },
    hist_cost: {
        type: String
    },
});

module.exports = mongoose.model('History', History);