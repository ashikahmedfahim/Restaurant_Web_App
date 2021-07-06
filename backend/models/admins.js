const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    max: 1024,
    required: true,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
