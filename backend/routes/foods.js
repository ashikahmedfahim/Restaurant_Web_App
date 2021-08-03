const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const food = require("../controllers/foods");
const { isAuthenticated, isAdmin } = require("../middlewares/index");

router.get("/", catchAsync(food.getAll));
router.post("/", isAuthenticated, isAdmin, catchAsync(food.createOne));
router.get("/:id", catchAsync(food.getOne));
router.put("/:id", isAuthenticated, isAdmin, catchAsync(food.updateOne));
router.delete("/:id", isAuthenticated, isAdmin, catchAsync(food.deleteOne));

module.exports = router;
