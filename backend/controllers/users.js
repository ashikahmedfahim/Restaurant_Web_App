const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dataValidations = require("../utilities/dataValidations");

module.exports.getAll = async (req, res, next) => {
  const users = await User.find({}, "email");
  res.send(users);
};

module.exports.createOne = async (req, res, next) => {
  const isValidData = dataValidations.isValidUserData(req.body);
  if (isValidData.error) return res.status(400).send(isValidData.error.message);
  const isAlreadyRegistered = await User.findOne({ email: req.body.email });
  if (isAlreadyRegistered) return res.send("User is Already Registered");
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    phone: req.body.phone,
    address: req.body.address,
  });
  const result = await user.save();
  const token = jwt.sign(
    { _id: result._id, email: result.email },
    "thisstheprivatekey"
  );
  res.header("x-auth-token", token).send(result);
};

module.exports.getOne = async (req, res, next) => {
  const isValidData = dataValidations.isValidObjectId(req.params.id);
  if (isValidData.error) return res.status(400).send("Invalid ID");
  const result = await User.findOne({ _id: req.params.id });
  if (!result) return res.send("ID Not Found");
  res.send({ _id: result._id, email: result.email });
};

module.exports.updateOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) return res.status(400).send("Invalid ID");
  const isValidPwd = dataValidations.isvalidPassword(req.body);
  if (isValidPwd.error) return res.status(400).send(isValidPwd.error.message);
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const result = await User.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { password: hashedPassword } }
  );
  if (!result) return res.send("Failed to update Password");
  res.send("Password updated successfully");
};

module.exports.deleteOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) return res.status(400).send("Invalid ID");
  const result = await User.findOneAndDelete({ _id: req.params.id });
  if (!result) return res.send("User Id not found");
  res.send("Successfully Deleted User");
};
