// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
   
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
 
  mobile: {
    type: String,
    required: true,
   
  },
  city: {
    type: String,
   
  },
  state: {
    type: String,
   
  }
}, { timestamps: true }); // automatically add createdAt and updatedAt fields

const User = mongoose.model('UserCityWise', userSchema);

module.exports = User;
