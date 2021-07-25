const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const auth = require("../controllers/auth")

router.post("/admin", catchAsync(auth.adminLogin));
router.post("/user", catchAsync(auth.userLogin));
