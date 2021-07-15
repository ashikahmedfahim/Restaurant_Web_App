const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    items: {
      foodId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Food",
        required: true,
      },
      quantity: {
        type: [Number],
        required: true,
        validate: {
          validator: function () {
            return this.foodId == this.quantity;
          },
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);
