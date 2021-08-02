const jwt = require("jsonwebtoken");
const ExpressError = require("../utilities/expressError");
const dataValidations = require("../utilities/dataValidations");
const Admin = require("../models/admins");
const User = require("../models/users");

module.exports.isValidToken = (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) throw new ExpressError(400, "Token not found");
    jwt.verify(token, process.env.SECRETKEY, (error, decoded) => {
      if (error) throw new ExpressError(400, "Invalid Token");
      req.credentials = decoded;
    });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports.isUserLoggedIn = async (req, res, next) => {
  try {
    const {_id} = req.credentials;
    const isValidData = dataValidations.isValidObjectId(_id);
    if (isValidData.error) throw new ExpressError(400, "Invalid Admin Id");
    const result = await User.findOne({ _id});
    if (!result) throw new ExpressError(404, "No User found");
    next();
  } catch (error) {
    next(error);
  }
};

module.exports.isAdminLoggedIn = async (req, res, next) => {
  try {
    const {_id} = req.credentials;
    const isValidData = dataValidations.isValidObjectId(_id);
    if (isValidData.error) throw new ExpressError(400, "Invalid Admin Id");
    const result = await Admin.findOne({ _id});
    if (!result) throw new ExpressError(404, "No Admin found");
    next();
  } catch (error) {
    next(error);
  }
};
