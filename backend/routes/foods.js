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
    name: Joi.string().required(),
    type: Joi.array().items(Joi.objectId().required()),
    category: Joi.array().items(Joi.objectId().required()),
    price: Joi.number().required(),
    inStock: Joi.bool().required(),
    image: Joi.string().required().uri(),
    description: Joi.string().required(),
    discount: Joi.number().min(0),
  });
  console.log("schema-------",req.body)
  console.log("food-------",req.body)
  const isValidData = await schema.validate(req.body);
  if (isValidData.error) {
    console.log("isValidDatamessage-------",isValidData.error.message)

    return res.status(400).json({ message: isValidData.error.message });
  } else {
    const food  = new Food(req.body);
    const data =  await food.save();
    console.log(data)
    res.send(data);
  }
});
router.get("/:id", (req, res, next) => {});
router.put("/:id", (req, res, next) => {});
router.delete("/:id", (req, res, next) => {});

module.exports = router;
