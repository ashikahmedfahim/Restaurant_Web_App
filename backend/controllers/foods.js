const Food = require("../models/foods");
const dataValidations = require("../utilities/dataValidations");
const ExpressError = require("../utilities/expressError");

module.exports.getAll = async (req, res, next) => {
  try {
    const result = await Food.find({});

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports.createOne = async (req, res, next) => {
  const { name, category, price, inStock, description, discount, image } =
    req.body;
  const isValidData = dataValidations.isValidFoodObject(req.body);
  if (isValidData)
    throw res.status(400).json({ message: isValidData.error.message });
  if (isValidData.error) throw new ExpressError(400, isValidData.error.message);
  const isAlreadyUsedName = await Food.findOne({ name: req.body.name });
  if (isAlreadyUsedName) throw new ExpressError(400, "Food already exists");
  const food = new Food({
    name,
    category,
    price,
    inStock,
    description,
    discount,
    image,
  });
  const result = await food.save();
  if (!result) throw new ExpressError(500, "Failed to create Food");
  res.send(result);
};

module.exports.getOne = async (req, res, next) => {
  const isValidId = dataValidations.isValidObjectId(req.params.id);
  if (isValidId.error) throw new ExpressError(400, "Invalid Food Id");
  const result = await Food.findOne({ _id: req.params.id });
  if (!result) throw new ExpressError(404, "No Food found");
  res.send(result);
};

module.exports.updateOne = async (req, res, next) => {};

module.exports.deleteOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) throw new ExpressError(400, "Invalid Food Id");
  const food = await Food.findOne({ _id: req.params.id });
  if (!food) throw new ExpressError(404, "No Food found");
  const result = await Food.findOneAndDelete({ _id: req.params.id });
  if (!result) throw new ExpressError(500, "Failed to delete Food");
  res.send("Successfully Deleted Food");
};
