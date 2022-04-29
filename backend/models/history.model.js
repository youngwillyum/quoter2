const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let History = new Schema({
    hist_date: {
        type: String,
        required: true
    },
    hist_gallons_requested: {
        type: String,
        required: true
    },
    hist_price_per_gallon: {
        type: String,
        required: false
    },
    hist_total_cost: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('History', History);
