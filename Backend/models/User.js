// Backend/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
  // Add additional fields as needed
});

module.exports = mongoose.model('User', userSchema);
