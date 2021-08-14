const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const user = require("../controllers/users");
const { isAuthenticated, isAdmin } = require("../middlewares/index");

router.get("/", isAuthenticated, isAdmin, catchAsync(user.getAll));
router.post("/", catchAsync(user.createOne));
router.get("/:id", isAuthenticated, catchAsync(user.getOne));
router.put("/:id", isAuthenticated, catchAsync(user.updateOne));
router.delete("/:id", isAuthenticated, catchAsync(user.deleteOne));

module.exports = router;
