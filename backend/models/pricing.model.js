const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Pricing = new Schema({
    margin: {
        type: Number,
        reqired: true
    },
    suggested_price_per_gallon: {
        type: Number,
        reqired: true
    },
    base_price: {
        type: Number,
        reqired: true
    },
    total_amount_due: {
        type: Number,
        reqired: true
    }
});

module.exports = mongoose.model('Pricing', Pricing);
