const Admin = require("../models/admins");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dataValidations = require("../utilities/dataValidations");

module.exports.getAll = async (req, res, next) => {
  const admins = await Admin.find({}, "email");
  res.send(admins);
};

module.exports.createOne = async (req, res, next) => {
  const isValidData = dataValidations.isValidUserObject(req.body);
  if (isValidData.error) return res.status(400).send(isValidData.error.message);
  const isAlreadyRegistered = await Admin.findOne({ email: req.body.email });
  if (isAlreadyRegistered) return res.send("Admin is Already Registered");
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const admin = new Admin({
    email: req.body.email,
    password: hashedPassword,
  });
  const result = await admin.save();
  const token = jwt.sign(
    { _id: result._id, email: result.email, isAdmin: true },
    "thisstheprivatekey"
  );
  res.header("x-auth-token", token).send(result);
};

module.exports.getOne = async (req, res, next) => {
  const isValidData = dataValidations.isValidObjectId(req.params.id);
  if (isValidData.error) return res.status(400).send("Invalid ID");
  const result = await Admin.findOne({ _id: req.params.id });
  if (!result) return res.send("ID Not Found");
  res.send({ _id: result._id, email: result.email });
};

module.exports.updateOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) return res.status(400).send("Invalid ID");
  const isValidPwd = dataValidations.isvalidPassword(req.body);
  if (isValidPwd.error) return res.status(400).send("Please enter a password");
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const result = await Admin.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { password: hashedPassword } }
  );
  if (!result) return res.send("Failed to update Password");
  res.send("Password updated successfully");
};

module.exports.deleteOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) return res.status(400).send("Invalid ID");
  const result = await Admin.findOneAndDelete({ _id: req.params.id });
  if (!result) return res.send("Admin Id not found");
  res.send("Successfully Deleted Admin");
}
