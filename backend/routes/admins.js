const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const admin = require("../controllers/admins");
const {
  isAuthenticated,
  isAdmin,
  isAuthorized,
} = require("../middlewares/index");

router.get("/", isAuthenticated, isAdmin, catchAsync(admin.getAll));
router.post("/", isAuthenticated, isAdmin, catchAsync(admin.createOne));
router.get(
  "/:id",
  isAuthenticated,
  isAdmin,
  isAuthorized,
  catchAsync(admin.getOne)
);
router.put(
  "/:id",
  isAuthenticated,
  isAdmin,
  isAuthorized,
  catchAsync(admin.updateOne)
);
router.delete(
  "/:id",
  isAuthenticated,
  isAdmin,
  isAuthorized,
  catchAsync(admin.deleteOne)
);

module.exports = router;
