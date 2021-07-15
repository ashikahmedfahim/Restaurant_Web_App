const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const type = require("../controllers/types");

router.get("/", catchAsync(type.getAll));
router.post("/", catchAsync(type.createOne));
router.get("/:id", catchAsync(type.getOne));
router.put("/:id", catchAsync(type.updateOne));
router.delete("/:id", catchAsync(type.deleteOne));

module.exports = router;
