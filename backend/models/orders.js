const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    isPaid: {
      type: Boolean,
      required: true,
    },
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
  { timestamps: true }
);

module.exports = mongoose.model("Ordder", orderSchema);
