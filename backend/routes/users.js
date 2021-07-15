const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const user = require("../controllers/users");

router.get("/", catchAsync(user.getAll));
router.post("/", catchAsync(user.createOne));
router.get("/:id", catchAsync(user.getOne));
router.put("/:id", catchAsync(user.updateOne));
router.delete("/:id", catchAsync(user.deleteOne));

module.exports = router;
