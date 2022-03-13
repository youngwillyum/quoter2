const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let History = new Schema({
    hist_date: {
        type: String
    },
    hist_gallons_requested: {
        type: String
    },
    hist_price_per_gallon: {
        type: String
    },
    hist_total_cost: {
        type: String
    }
});

module.exports = mongoose.model('History', History);