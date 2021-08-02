const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const admin = require("../controllers/admins");
const { isValidToken, isAdminLoggedIn } = require("../middlewares/index");

router.get("/", isValidToken, isAdminLoggedIn, catchAsync(admin.getAll));
router.post("/", catchAsync(admin.createOne));
router.get("/:id", catchAsync(admin.getOne));
router.put("/:id", catchAsync(admin.updateOne));
router.delete("/:id", catchAsync(admin.deleteOne));

module.exports = router;
