const Cart = require("../models/carts");
const Food = require("../models/foods");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dataValidations = require("../utilities/dataValidations");
const ExpressError = require("../utilities/expressError");

module.exports.addCart = async (req, res, next) => {
  const items = { foodId: req.body.item, quantity: req.body.qty };

  const cart = new Cart({ items: items, user: req.body.user });
  const result = await cart.save();

  // if (!result) throw new ExpressError(500, "Failed to create Food");
  res.send(result);
};

module.exports.getOne = async (req, res, next) => {
  const cart = await Cart.findOne({ user: req.params.id });
  const qty= cart.items[0].quantity;
  const foodId= cart.items[0].foodId;
  const food = await Food.findOne({ _id: foodId });

  // if (!result) throw new ExpressError(404, "No Food found");
  res.status(200).json({ result: food, qty });

};
