const Category = require("../models/categories");
const dataValidations = require("../utilities/dataValidations");

module.exports.getAll = async (req, res, next) => {
  const result = await Category.find({});
  res.status(201).send(result);
};

module.exports.createOne = async (req, res, next) => {
  const isValidData = dataValidations.isValidString(req.body);
  if (isValidData.error) return res.status(400).send("Invalid Category Name");
  const category = new Category(req.body);
  const result = await category.save();
  res.status(201).send(result);
};

module.exports.getOne = async (req, res, next) => {
  const isValidId = dataValidations.isValidObjectId(req.params.id);
  if (isValidId.error) return res.status(400).send("Invalid ID");
  const result = await Category.findOne({ _id: req.params.id });
  if (!result) return res.send("ID does not Matched");
  res.send(result);
};

module.exports.updateOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) return res.status(400).send("Invalid ID");
  const isValidName = dataValidations.isValidString(req.body);
  if (isValidName.error) return res.status(400).send("Please enter a  Category Name");
  const isUnique = await Category.findOne({ name: req.body.name });
  if (isUnique) return res.status(400).send("Category Name is already in use");
  const result = await Category.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { name: req.body.name } }
  );
  if (!result) return res.send("Failed to update Categoty");
  res.send("Categoty updated successfully");
};

module.exports.deleteOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) return res.status(400).send("Invalid ID");
  const result = await Category.findOneAndDelete({ _id: req.params.id });
  if (!result) return res.send("Category Id not found");
  res.send("Successfully Deleted Category");
};
