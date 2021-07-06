const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  type: {
    type: [Schema.Types.ObjectId],
    ref: "Type",
    required: true,
  },
  category: {
    type: [Schema.Types.ObjectId],
    ref: "Category",
    required: true,
  },
  name: {
    type: String,
    lowerCase: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
    required: true,
  },
});

module.exports = mongoose.model("Food", foodSchema);
