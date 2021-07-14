const express = require("express");
const router = express.Router();
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const Type = require("../models/types");

router.get("/", async(req, res, next) => {
  const result = await Type.find({});
  console.log(result);
  res.status(201).json(result);
});

router.post("/", async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  console.log(req.body);
  console.log(req.body.type);
  const isValidData = schema.validate(req.body);
  if (isValidData.error) {
    console.log("isValidDatamessage-------", isValidData.error.message);

    return res.status(400).json({ message: isValidData.error.message });
  } else {
    const type = new Type(req.body);
    const data = await type.save();
    res.status(201).json(data);
  }
});
router.get("/:id", (req, res, next) => {});
router.put("/:id", (req, res, next) => {});
router.delete("/:id", (req, res, next) => {});

module.exports = router;
