const Category = require("../models/categories");
const dataValidations = require("../utilities/dataValidations");

module.exports.getAll = async (req, res, next) => {
  const result = await Category.find({});
  if (!result.length) throw new ExpressError(204, "No Category found");
  res.status(201).send(result);
};

module.exports.createOne = async (req, res, next) => {
  const isValidData = dataValidations.isValidString(req.body);
  if (isValidData.error) throw new ExpressError(400, isValidData.error.message);
  const category = new Category(req.body);
  const result = await category.save();
  if (!result) throw new ExpressError(500, "Failed to create Category");
  res.send(result);
};

module.exports.getOne = async (req, res, next) => {
  const isValidId = dataValidations.isValidObjectId(req.params.id);
  if (isValidId.error) throw new ExpressError(400, "Invalid Category Id");
  const result = await Category.findOne({ _id: req.params.id });
  if (!result) throw new ExpressError(404, "no Category found");
  res.send(result);
};

module.exports.updateOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) throw new ExpressError(400, "Invalid Category Id");
  const isValidName = dataValidations.isValidString(req.body);
  if (isValidName.error) throw new ExpressError(400, "Invalid Category name");
  const isUnique = await Category.findOne({ name: req.body.name });
  if (isUnique) throw new ExpressError(400, "Category name already exists");
  const category = await Category.findOne({ _id: req.params.id });
  if (!category) throw new ExpressError(404, "no Category found");
  const result = await Category.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { name: req.body.name } }
  );
  if (!result) throw new ExpressError(500, "Failed to update Category name");
  res.send("Category updated successfully");
};

module.exports.deleteOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) throw new ExpressError(400, "Invalid Category Id");
  const category = await Category.findOne({ _id: req.params.id });
  if (!category) throw new ExpressError(404, "no Category found");
  const result = await Category.findOneAndDelete({ _id: req.params.id });
  if (!result)  throw new ExpressError(500, "Failed to delete Category");
  res.send("Successfully Deleted Category");
};
