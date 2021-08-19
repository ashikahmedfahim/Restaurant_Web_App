const Cart = require("../models/cart");
const Food = require("../models/foods");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dataValidations = require("../utilities/dataValidations");
const ExpressError = require("../utilities/expressError");

module.exports.getCart = async (req, res, next) => {};
module.exports.updateOne = async (req, res, next) => {};

module.exports.addCart = async (req, res, next) => {
  // const isValidData = dataValidations.isValidUserObject(req.body);
  // if (isValidData.error) throw new ExpressError(400, isValidData.error.message);
  const cart = await Cart.findOne({ user: req.body.user });
  if (cart) {
    const id = await Cart.find({
      user: req.body.user,
      "items.foodId": req.body.item,
    });
    if (id.length === 0) {
      const items = { foodId: req.body.item, quantity: req.body.qty };
      old = cart.items;
      old.push(items);
      const result = await Cart.findByIdAndUpdate(
        { _id: cart._id },
        { $set: { items: old } }
      );
      res.send(result);
    } else {
      const oldItems = id[0].items.filter((i) => {
        return i.foodId != req.body.item;
      });
      const item = { foodId: req.body.item, quantity: req.body.qty };
      oldItems.push(item);
      const result = await Cart.findByIdAndUpdate(
        { _id: cart._id },
        { $set: { items: oldItems } }
      );
      if (!result) res.status(501);
      res.send("result");
    }
  } else {
    const items = { foodId: req.body.item, quantity: req.body.qty };
    const cart = new Cart({ items: items, user: req.body.user });
    const result = await cart.save();
    res.send(result);
  }
};

module.exports.getCart = async (req, res, next) => {
  const cart = await Cart.findOne({ user: req.params.id });
  // let food = {};
  // let foods = [];
  // let foodid = "";
  Object.keys(cart.items).map((item) =>
    console.log(cart.items[item].foodId)
    // foodid = cart.items[item].foodId
    // food =  Food.findOne({ _id: foodId })
    // foods.push(food)
  );
  // food = await Food.findOne({ _id: foodid });
  // foods.push(food.name);
  // console.log(foodid);
  // console.log(foods);
  res.status(200).json({ result: cart });
};

// module.exports.getOne = async (req, res, next) => {
//   const cart = await Cart.findOne({ user: req.params.id });
//   const qty = cart.items[0].quantity;
//   const foodId = cart.items[0].foodId;
//   const food = await Food.findOne({ _id: foodId });

//   if (!result) throw new ExpressError(404, "No Food found");
//   res.status(200).json({ result: food, qty });
// };
