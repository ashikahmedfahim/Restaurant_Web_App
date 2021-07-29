const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const cart = require("../controllers/carts");

router.get("/:id", catchAsync(cart.getOne));
router.post("/",catchAsync(cart.addCart));

module.exports = router;
