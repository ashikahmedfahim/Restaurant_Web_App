const express = require("express");
const router = express.Router();
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const Food = require("../models/foods");

router.get("/", async (req, res, next) => {
  const result = await Food.find({});
  console.log(result);
  res.send(result);
});
router.post("/",async (req, res, next) => {
  const schema = Joi.object({
    type: Joi.array().items(Joi.objectId().required()),
    category: Joi.array().items(Joi.objectId().required()),
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().uri(),
    inStock: Joi.bool().required(),
    discount: Joi.number().min(0),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.send(result.error.message);
  } else {
    const food  = new Food(req.body);
    const data =  await food.save();
    res.send(data);
  }
});
router.get("/:id", (req, res, next) => {});
router.put("/:id", (req, res, next) => {});
router.delete("/:id", (req, res, next) => {});

module.exports = router;
