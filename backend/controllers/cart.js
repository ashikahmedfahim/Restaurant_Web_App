const Cart = require("../models/cart");
const Food = require("../models/foods");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dataValidations = require("../utilities/dataValidations");
const ExpressError = require("../utilities/expressError");

module.exports.getCart = async (req, res, next) => {
  const userId = req.params.id;
  const cart = await Cart.findOne({ user: userId }).populate("items.foodId");
  if (!cart) throw new ExpressError(400, "No cart found");
  res.status(200).json({ result: cart });
};

module.exports.updateOne = async (req, res, next) => {
  const cart = await Cart.findOne({ _id: req.params.cartId });
  if (!cart) throw new ExpressError(400, "No cart found");
  const result = await Cart.findByIdAndUpdate(
    { _id: cart._id },
    { $set: { items: [...req.body.items] } }, 
    {new: true}
  ).populate("items.foodId");
  res.status(200).json({ result: result });
};
