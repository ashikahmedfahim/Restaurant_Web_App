const express = require("express");
const router = express.Router();


router.get("/api/users", (req, res, next) => {});
router.post("/api/users", (req, res, next) => {});
router.get("/api/users/:id", (req, res, next) => {});
router.put("/api/users/:id", (req, res, next) => {});
router.delete("/api/users/:id", (req, res, next) => {});

module.exports = router;