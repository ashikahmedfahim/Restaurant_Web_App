const express = require("express");
const router = express.Router();
const order = require("../controllers/orders")
const catchAsync = require("../utilities/catchAsync");
const { isAuthenticated, isAdmin } = require("../middlewares/index");

router.get("/:id/orders", catchAsync(order.getAll));
router.post(":id/orders", catchAsync(order.create));
router.get("/:id/orders/:id", catchAsync(order.getOne));

module.exports = router;