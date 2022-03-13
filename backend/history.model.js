const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let History = new Schema({
    hist_date: {
        type: String,
        reqired: true
    },
    hist_gallons_requested: {
        type: String,
        reqired: true
    },
    hist_price_per_gallon: {
        type: String,
        reqired: false
    },
    hist_total_cost: {
        type: String,
        reqired: false
    }
});

module.exports = mongoose.model('History', History);
