const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Login = new Schema({
    login_email:{
      type: email,
      required: true
    },
    login_password:{
      type: password,
      required: true
    }
});

module.exports = mongoose.model('Login', Login);
