const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  }
},
{
  timestamps: true,
});

module.exports = mongoose.model("Type", typeSchema);
