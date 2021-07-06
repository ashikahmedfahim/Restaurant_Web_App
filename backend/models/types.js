const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  foods: {
    type: [Schema.Types.ObjectId],
    ref: "Food",
  },
});

module.exports = mongoose.model("Type", typeSchema);
