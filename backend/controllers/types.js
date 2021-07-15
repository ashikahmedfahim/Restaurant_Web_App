const Type = require("../models/types");
const dataValidations = require("../utilities/dataValidations");

module.exports.getAll = async (req, res, next) => {
  const result = await Type.find({});
  res.status(201).send(result);
};

module.exports.createOne = async (req, res, next) => {
  const isValidData = dataValidations.isValidString(req.body);
  console.log(req.body);
  console.log(req.body.type);
  if (isValidData.error) return res.status(400).send("Invalid Name");
  const type = new Type(req.body);
  const result = await type.save();
  res.status(201).send(result);
};

module.exports.getOne = async (req, res, next) => {
  const isValidId = dataValidations.isValidObjectId(req.params.id);
  if (isValidId.error) return res.status(400).send("Invalid ID");
  const result = await Type.findOne({ _id: req.params.id });
  if (!result) return res.send("ID does not Matched");
  res.send(result);
};

module.exports.updateOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) return res.status(400).send("Invalid ID");
  const isValidName = dataValidations.isValidString(req.body);
  if (isValidName.error) return res.status(400).send("Please enter a Name");
  const isUnique = await Type.findOne({ name: req.body.name });
  if (isUnique) return res.status(400).send("Name is already in use");
  const result = await Type.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { name: req.body.name } }
  );
  if (!result) return res.send("Failed to update Name");
  res.send("Name updated successfully");
};

module.exports.deleteOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) return res.status(400).send("Invalid ID");
  const result = await Type.findOneAndDelete({ _id: req.params.id });
  if (!result) return res.send("Type Id not found");
  res.send("Successfully Deleted Type");
};
