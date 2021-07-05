const express = require("express");
const router = express.Router();

router.get("/api/users/:id/orders", (req, res, next) => {});
router.post("/api/users/:id/orders", (req, res, next) => {});
router.get("/api/users/:id/orders/:id", (req, res, next) => {});
router.delete("/api/users/:id/orders/:id", (req, res, next) => {});

module.exports = router;