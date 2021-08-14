const express = require("express");
const router = express.Router();
const order = require("../controllers/orders");
const catchAsync = require("../utilities/catchAsync");
const { isAuthenticated, isAdmin } = require("../middlewares/index");


//need aithorization here
router.get("/:id/orders", isAuthenticated, catchAsync(order.getAll));
router.post(":id/orders", isAuthenticated, catchAsync(order.create));
router.get("/:id/orders/:id", isAuthenticated, catchAsync(order.getOne));

module.exports = router;
