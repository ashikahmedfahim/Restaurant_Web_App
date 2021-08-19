const express = require("express");
const router = express.Router({ mergeParams: true });
const catchAsync = require("../utilities/catchAsync");
const cart = require("../controllers/cart");
const { isAuthenticated, isAdmin, isAuthorized } = require("../middlewares/index");

router.get("/",isAuthenticated,isAuthorized, catchAsync(cart.getCart));
router.patch("/:cartId", isAuthenticated, isAuthorized, catchAsync(cart.updateOne));


module.exports = router;
