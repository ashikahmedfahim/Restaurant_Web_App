const Cart = require("../models/carts");
const Food = require("../models/foods");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dataValidations = require("../utilities/dataValidations");
const ExpressError = require("../utilities/expressError");

module.exports.addCart = async (req, res, next) => {
  // if (!result) throw new ExpressError(500, "Failed to create Food");
  const user = await Cart.findOne({ user: req.body.user });

  if (user) {
    // console.log(req.body.item);
    // const id = await Cart.findOne({
    //   items: [{ $in: { foodId: req.body.item } }],
    // });

    const id = await Cart.find({
      "items.foodId": req.body.item,
      user: req.body.user,
    });
    console.log(id);
    if (id.length === 0) {
      // const items = { foodId: req.body.item, quantity: req.body.qty };
      // old = id[0].items[0].quantity;
      // // console.log(old);

      // // old.push(items);
      // const result = await Cart.findByIdAndUpdate(
      //   { _id: id[0]._id, user: req.body.user },
      //   { $set: { "items.quantity": req.body.qty } }
      // );
      console.log("result");
      // res.send(result);
    } else {
      console.log("result2");
      // const items = { foodId: req.body.item, quantity: req.body.qty };
      // old = user.items;
      // old.push(items);
      // const result = await Cart.findByIdAndUpdate(
      //   { _id: user._id },
      //   { $set: { items: old } }
      // );
      // res.send("result");
    }
    // res.send(result);
  } else {
    const items = { foodId: req.body.item, quantity: req.body.qty };

    const cart = new Cart({ items: items, user: req.body.user });
    const result = await cart.save();
    res.send(result);
  }
};

module.exports.getCart = async (req, res, next) => {
  const cart = await Cart.findOne({ user: req.params.id });
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
