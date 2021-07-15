const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

module.exports.isValidAdmin = (value) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).required();
  const isValidData = schema.validate(value);
  return isValidData;
}

module.exports.isValidObjectId = (value) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
  });
  const isValidData = schema.validate({ id: value });
  return isValidData;
}

module.exports.isvalidPassword = (value) => {
  const passwordSchema = Joi.object({
    password: Joi.string().required(),
  });
  const isValidPassword = passwordSchema.validate(value);
  return isValidPassword;
}