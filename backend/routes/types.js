const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const type = require("../controllers/types");
const { isAuthenticated, isAdmin } = require("../middlewares/index");

router.get("/", catchAsync(type.getAll));
router.post("/", isAuthenticated, isAdmin, catchAsync(type.createOne));
router.get("/:id", catchAsync(type.getOne));
router.put("/:id", isAuthenticated, isAdmin, catchAsync(type.updateOne));
router.delete("/:id", isAuthenticated, isAdmin, catchAsync(type.deleteOne));

module.exports = router;
