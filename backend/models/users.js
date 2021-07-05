const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    lowerCase: true,
    required: true,
  },
  email: {
    type: String,
    minlength: 5,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    maxlength: 1024,
    required: true,
  },
  phone: {
    type: Number,
    min: 9999999999,
    required: true,
  },
  address: {
    type: String,
    minlength: 10,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);


