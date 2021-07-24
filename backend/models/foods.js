const mongoose = require("mongoose");
const { startSession } = require("./admins");

const foodSchema = new mongoose.Schema(
  {
    // type: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Type",
    //     required: true,
    //   },
    // ],
    type: {
      type: String,
      default: "New Added",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    name: {
      type: String,
      unique: true,
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Food", foodSchema);
