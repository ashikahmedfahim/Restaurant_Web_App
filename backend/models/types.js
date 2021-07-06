const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  foods: {
    type: [Schema.Types.ObjectId],
    ref: "Food",
  },
});

module.exports = mongoose.model("Type", typeSchema);
