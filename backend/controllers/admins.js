const Admin = require("../models/admins");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dataValidations = require("../utilities/dataValidations");
const ExpressError = require("../utilities/expressError");

module.exports.getAll = async (req, res, next) => {
  const result = await Admin.find({}, "email");
  res.send(result);
};

module.exports.createOne = async (req, res, next) => {
  const isValidData = dataValidations.isValidUserObject(req.body);
  if (isValidData.error) throw new ExpressError(400, isValidData.error.message);
  const isAlreadyRegistered = await Admin.findOne({ email: req.body.email });
  if (isAlreadyRegistered)
    throw new ExpressError(400, "This E-mail is Already Registered");
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const admin = new Admin({
    email: req.body.email,
    password: hashedPassword,
  });
  const result = await admin.save();
  if (!result) throw new ExpressError(500, "Failed to create Admin");
  const token = jwt.sign(
    { _id: result._id, email: result.email, isAdmin: true },
    "thisstheprivatekey"
  );
  res.header("x-auth-token", token).send(result);
};

module.exports.getOne = async (req, res, next) => {
  const isValidData = dataValidations.isValidObjectId(req.params.id);
  if (isValidData.error) throw new ExpressError(400, "Invalid Admin Id");
  const result = await Admin.findOne({ _id: req.params.id });
  if (!result) throw new ExpressError(404, "No Admin found");
  res.send({ _id: result._id, email: result.email });
};

module.exports.updateOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) throw new ExpressError(400, "Invalid Admin Id");
  const isValidPwd = dataValidations.isvalidPassword(req.body);
  if (isValidPwd.error) throw new ExpressError(400, isValidPwd.error.message);
  const admin = await Admin.findOne({ _id: req.params.id });
  if (!admin) throw new ExpressError(404, "No Admin found");
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const result = await Admin.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { password: hashedPassword } }
  );
  if (!result) throw new ExpressError(500, "Failed to update Password");
  res.send("Password updated successfully");
};

module.exports.deleteOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) throw new ExpressError(400, "Invalid Admin Id");
  const admin = await Admin.findOne({ _id: req.params.id });
  if (!admin) throw new ExpressError(404, "No Admin found");
  const result = await Admin.findOneAndDelete({ _id: req.params.id });
  if (!result) throw new ExpressError(500, "Failed to delete Admin");
  res.send("Successfully Deleted Admin");
};
