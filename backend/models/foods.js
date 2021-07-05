const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/restaurant", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.log(error));

const foodSchema = new mongoose.Schema({
  type: {
    type: [String],
    enum: ["New", "Old"],
    required: true,
  },
  category: {
    type: [String],
    enum: ["Burger", "Pizza"],
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
