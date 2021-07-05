const express = require("express");
const router = express.Router();
const joi = require("joi");

router.get("/", (req, res, next) => {});
router.post("/", (req, res, next) => {
  const schema = joi.object({
    name: joi.string().min(3).required(),
    price: joi.number().required(),
  });
  const result = schema.validate({ ...req.body });
  if (result.error) {
    res.send(result.error.message);
  } else {
    res.send(req.body);
  }
});
router.get("/:id", (req, res, next) => {});
router.put("/:id", (req, res, next) => {});
router.delete("/:id", (req, res, next) => {});

module.exports = router;