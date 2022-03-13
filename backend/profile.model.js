const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Profile = new Schema({
  profile_fullname: {
    type: String
  },
  profile_address1: {
    type: String
  },
  profile_address2: {
    type: String
  },
  profile_city: {
    type: String
  },
  profile_state: {
    type: String
  },
  profile_zipcode: {
    type: String
  }

});

module.exports = mongoose.model('Profile', Profile)
