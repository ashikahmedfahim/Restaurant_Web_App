const Type = require("../models/types");
const dataValidations = require("../utilities/dataValidations");
const ExpressError = require("../utilities/expressError");

module.exports.getAll = async (req, res, next) => {
  const result = await Type.find({});
  res.status(201).send(result);
};

module.exports.createOne = async (req, res, next) => {
  const isValidData = dataValidations.isValidString(req.body);
  if (isValidData.error) throw new ExpressError(400, isValidData.error.message);
  const type = new Type(req.body);
  const result = await type.save();
  if (!result) throw new ExpressError(500, "Failed to create Type");
  res.status(201).send(result);
};

module.exports.getOne = async (req, res, next) => {
  const isValidId = dataValidations.isValidObjectId(req.params.id);
  if (isValidId.error) throw new ExpressError(400, "Invalid Type Id");
  const result = await Type.findOne({ _id: req.params.id });
  if (!result) throw new ExpressError(404, "No Type found");
  res.send(result);
};

module.exports.updateOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) throw new ExpressError(400, "Invalid Type Id");
  const isValidName = dataValidations.isValidString(req.body);
  if (isValidName.error) throw new ExpressError(400, "Invalid Type name");
  const type = await Type.findOne({ _id: req.params.id });
  if (!type) throw new ExpressError(404, "No Type found");
  const isUnique = await Type.findOne({ name: req.body.name });
  if (isUnique) throw new ExpressError(400, "Type name already exists");
  const result = await Type.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { name: req.body.name } }
  );
  if (!result) throw new ExpressError(500, "Failed to update Type name");
  res.send("Type Name updated successfully");
};

module.exports.deleteOne = async (req, res, next) => {
  const isValidObjectId = dataValidations.isValidObjectId(req.params.id);
  if (isValidObjectId.error) throw new ExpressError(400, "Invalid Type Id");
  const type = await Type.findOne({ _id: req.params.id });
  if (!type) throw new ExpressError(404, "No Type found");
  const result = await Type.findOneAndDelete({ _id: req.params.id });
  if (!result) throw new ExpressError(500, "Failed to delete Type");
  res.send("Successfully Deleted Type");
};
