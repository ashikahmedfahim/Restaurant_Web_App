const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const category = require("../controllers/categories");
const { isAuthenticated, isAdmin } = require("../middlewares/index");

router.get("/", catchAsync(category.getAll));
router.post("/",isAuthenticated, isAdmin, catchAsync(category.createOne));
router.get("/:id", catchAsync(category.getOne));
router.put("/:id", isAuthenticated, isAdmin,catchAsync(category.updateOne));
router.delete("/:id", isAuthenticated, isAdmin,catchAsync(category.deleteOne));

module.exports = router;
