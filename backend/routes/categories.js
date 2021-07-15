const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const category = require("../controllers/categories");

router.get("/", catchAsync(category.getAll));
router.post("/", catchAsync(category.createOne));
router.get("/:id", catchAsync(category.getOne));
router.put("/:id", catchAsync(category.updateOne));
router.delete("/:id", catchAsync(category.deleteOne));

module.exports = router;
