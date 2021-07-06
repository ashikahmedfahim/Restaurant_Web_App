const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  foods: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Food",
  },
});

module.exports = mongoose.model("Category", categorySchema);
