const express = require("express");
const router = express.Router();
const { isAuthenticated, isAdmin } = require("../middlewares/index");

router.get("/:id/orders", (req, res, next) => {});
router.post(":id/orders", (req, res, next) => {});
router.get("/:id/orders/:id", (req, res, next) => {});
router.delete("/:id/orders/:id", (req, res, next) => {});

module.exports = router;