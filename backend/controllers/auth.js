const Admin = require("../models/admins");
const User = require("../models/users");
const Cart = require("../models/cart");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dataValidations = require("../utilities/dataValidations");
const ExpressError = require("../utilities/expressError");

const secretKey = process.env.SECRETKEY;

module.exports.adminLogin = async (req, res, next) => {
  const isValidData = dataValidations.isValidUserObject(req.body);
  if (isValidData.error) throw new ExpressError(400, isValidData.error.message);
  const isAdmin = await Admin.findOne({ email: req.body.email });
  if (isAdmin) {
    const isValidAdmin = await bcrypt.compare(
      req.body.password,
      isAdmin.password
    );
    if (isValidAdmin) {
      const token = jwt.sign(
        { _id: isAdmin._id, email: isAdmin.email, isAdmin: true },
        process.env.SECRETKEY
      );
      res
        .status(200)
        .header("x-auth-token", token)
        .json({ result: isAdmin, token });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } else {
    res.status(404).json({ message: "Invalid credentials" });
  }
};

module.exports.userLogin = async (req, res, next) => {
  const isValidData = dataValidations.isValidUserObject(req.body);
  if (isValidData.error) throw new ExpressError(400, isValidData.error.message);
  const isUser = await User.findOne({ email: req.body.email });
  if (isUser) {
    const isValidUser = await bcrypt.compare(
      req.body.password,
      isUser.password
    );
    if (isValidUser) {
      const cart = await Cart.findOne({ user: isUser._id });
      if (!cart)
        throw new ExpressError(400, "Internal Server Error, Please try again");
      const token = jwt.sign(
        {
          _id: isUser._id,
          name: isUser.name,
          email: isUser.email,
          isAdmin: false,
          cartId: cart._id,
        },
        process.env.SECRETKEY
      );
      res.status(200).json({ token });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } else {
    res.status(404).json({ message: "Invalid credentials" });
  }
};
