const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const user = require("../controllers/users");
const {
  isAuthenticated,
  isAdmin,
  isAuthorized,
} = require("../middlewares/index");

router.get("/", isAuthenticated, isAdmin, catchAsync(user.getAll));
router.post("/", catchAsync(user.createOne));
router.get("/:id", isAuthenticated, isAuthorized, catchAsync(user.getOne));
router.patch("/:id/reset-password", isAuthenticated, isAuthorized, catchAsync(user.updatePassword));
router.delete(
  "/:id",
  isAuthenticated,
  isAuthorized,
  catchAsync(user.deleteOne)
);

module.exports = router;
