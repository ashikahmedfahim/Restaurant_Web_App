const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const food = require("../controllers/foods");

router.get("/", catchAsync(food.getAll));
router.post("/", catchAsync(food.createOne));
router.get("/:id", catchAsync(food.getOne));
router.put("/:id", catchAsync(food.updateOne));
router.delete("/:id", catchAsync(food.deleteOne));

module.exports = router;
