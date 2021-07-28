const Admin = require("../models/admins");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dataValidations = require("../utilities/dataValidations");
const ExpressError = require("../utilities/expressError");

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
        "thisstheprivatekey"
      );
      res.status(200).json({ result: isAdmin, token });
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
      const token = jwt.sign(
        { _id: isUser._id, email: isUser.email, isAdmin: false },
        "thisstheprivatekey"
      );
      // res.header("x-auth-token", token).send(result);
      res.status(200).json({ result: isUser, token });

      // res.send(token);
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } else {
    res.status(404).json({ message: "Invalid credentials" });
  }
};
