const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Login = new Schema({
    login_email:{
      type: String,
      required: true
    },
    login_password:{
      type: String,
      required: true
    }
});

module.exports = mongoose.model('Login', Login);
