const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  foods: {
    type: [Schema.Types.ObjectId],
    ref: "Food",
  },
});

module.exports = mongoose.model("Category", categorySchema);
