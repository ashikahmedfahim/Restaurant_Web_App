const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dataValidations = require("../utilities/dataValidations");
const ExpressError = require("../utilities/expressError");

const secretKey = process.env.SECRETKEY;

module.exports.getAll = async (req, res, next) => {
  const users = await User.find({}, "email");
  res.send(users);
};

module.exports.createOne = async (req, res, next) => {
  console.log(req.body)
  const isValidData = dataValidations.isValidUserData(req.body);
  console.log(isValidData)
  if (isValidData.error) throw new ExpressError(400, isValidData.error.message);
  const isAlreadyRegistered = await User.findOne({ email: req.body.email });
  if (isAlreadyRegistered)
    throw new ExpressError(400, "This E-mail is Already Registered");
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
  if (!result) throw new ExpressError(500, "Failed to create User");
  const token = jwt.sign(
    { _id: result._id, email: result.email },
    "thisstheprivatekey"
  );
  res.status(200).json({ result: result, token });
};

module.exports.getOne = async (req, res, next) => {
  const isValidData = dataValidations.isValidObjectId(req.params.id);
  if (isValidData.error) throw new ExpressError(400, "Invalid User Id");
  const result = await User.findOne({ _id: req.params.id });
  if (!result) throw new ExpressError(404, "No User found");
  res.send({ _id: result._id, email: result.email });
};

module.exports.updateOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) throw new ExpressError(400, "Invalid User Id");
  const isValidPwd = dataValidations.isvalidPassword(req.body);
  if (isValidPwd.error) throw new ExpressError(400, isValidPwd.error.message);
  const user = await User.findOne({ _id: req.params.id });
  if (!user) throw new ExpressError(404, "No User found");
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const result = await User.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { password: hashedPassword } }
  );
  if (!result) throw new ExpressError(500, "Failed to update Password");
  res.send("Password updated successfully");
};

module.exports.deleteOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) throw new ExpressError(400, "Invalid User Id");
  const user = await User.findOne({ _id: req.params.id });
  if (!user) throw new ExpressError(404, "No User found");
  const result = await User.findOneAndDelete({ _id: req.params.id });
  if (!result) throw new ExpressError(500, "Failed to delete User");
  res.send("Successfully Deleted User");
};
