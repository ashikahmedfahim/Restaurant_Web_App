const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

module.exports.isValidUserObject = (value) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().minlength(8).required(),
  });
  const isValidData = schema.validate(value);
  return isValidData;
};

module.exports.isValidUserData = (value) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    phone: Joi.string().min(11).max(11).required(),
    address: Joi.string().min(10).required(),
  });
  const isValidData = schema.validate(value);
  return isValidData;
};

module.exports.isValidObjectId = (value) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
  });
  const isValidData = schema.validate({ id: value });
  return isValidData;
};

module.exports.isvalidPassword = (value) => {
  const passwordSchema = Joi.object({
    password: Joi.string().min(8).required(),
  });
  const isValidPassword = passwordSchema.validate(value);
  return isValidPassword;
};

module.exports.isValidString = (value) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  const isValidData = schema.validate(value);
  return isValidData;
};

module.exports.isValidFoodObject = (value) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    type: Joi.array().items(Joi.objectId().required()).required(),
    category: Joi.array().items(Joi.objectId().required()).required(),
    price: Joi.number().required(),
    inStock: Joi.bool().required(),
    image: Joi.string().required().uri(),
    description: Joi.string().required(),
    discount: Joi.number().min(0),
  });
  const isValidData = schema.validate(value);
  return isValidData;
}
