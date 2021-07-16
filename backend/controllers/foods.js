const Food = require("../models/foods");
const dataValidations = require("../utilities/dataValidations");

module.exports.getAll = async (req, res, next) => {
  const result = await Food.find({});
  res.json(result);
};

module.exports.createOne = async (req, res, next) => {
  const isValidData = dataValidations.isValidFoodObject(req.body);
  if (isValidData.error) return res.status(400).json(isValidData.error.message);
  const isAlreadyUsedName = await Food.findOne({ name: req.body.name });
  if (isAlreadyUsedName) return res.status(400).send("Food name is already used");
  const food = new Food(req.body);
  const result = await food.save();
  res.send(result);
};

module.exports.getOne = async (req, res, next) => {
  const isValidId = dataValidations.isValidObjectId(req.params.id);
  if (isValidId.error) return res.status(400).send("Invalid ID");
  const result = await Food.findOne({ _id: req.params.id });
  if (!result) return res.send("ID does not Matched");
  res.send(result);
};

module.exports.updateOne = async (req, res, next) => {};

module.exports.deleteOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) return res.status(400).send("Invalid ID");
  const result = await Food.findOneAndDelete({ _id: req.params.id });
  if (!result) return res.send("Food Id not found");
  res.send("Successfully Deleted Food");
};
