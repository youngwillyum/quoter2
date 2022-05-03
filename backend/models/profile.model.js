const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Profile = new Schema({
  profile_fullname: {
    type: String,
    required: true,
    min:3,
    max:50
  },
  profile_address1: {
    type: String,
    required: true,
    min:3,
    max:50
  },
  profile_address2: {
    type: String,
  },
  profile_city: {
    type: String,
    required: true
  },
  profile_state: {
    type: String,
    required: true,
    min:3,
    max:50
  },
  profile_zipcode: {
    type: String,
    required: true,
    min:3,
    max:9
  }

});

module.exports = mongoose.model('Profile', Profile)
