const express = require("express");
const router = express.Router();
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const Admin = require("../models/admins");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utilities/catchAsync");
const admin = require("../controllers/admin");

router.get("/", catchAsync(admin.index));

router.post("/", async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  const isValidData = schema.validate(req.body);

  if (isValidData.error) {
    res.send(isValidData.error.message);
  } else {
  const isAlreadyRegistered = await Admin.findOne({ email: req.body.email });
  if (isAlreadyRegistered) return res.send("Admin is Already Registered");
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const admin = new Admin({
    email: req.body.email,
    password: hashedPassword,
  });

  const result = await admin.save();
  const token = jwt.sign(
    { _id: result._id, email: result.email, isAdmin: true },
    "thisstheprivatekey"
  );
  res.header("x-auth-token", token).send(result);
  }
});

router.post("/login", async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  const isValidData = schema.validate(req.body);
  if (isValidData.error)
    return res.status(400).json({ message: isValidData.error.message });
  const isAdmin = await Admin.findOne({ email: req.body.email });
  if (isAdmin) {
    const isValidAdmin = await bcrypt.compare(
      req.body.password,
      isAdmin.password
    );
    console.log("isValidAdmin", isValidAdmin);
    if (isValidAdmin) {
      const token = jwt.sign(
        { _id: isAdmin._id, email: isAdmin.email, isAdmin: true },
        "thisstheprivatekey"
      );
      res.send(token);
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } else {
    res.status(404).json({ message: "Admin Doesn't Exists." });
  }
});

router.get("/:id", async (req, res, next) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
  });
  const isValidData = schema.validate({ id: req.params.id });
  if (isValidData.error) return res.send("Invalid Admin ID");
  const result = await Admin.findOne({ _id: req.params.id });
  if (!result) return res.send("ID Not Found");
  res.send({ _id: result._id, email: result.email });
});

router.put("/:id", async (req, res, next) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
  });
  const isValidData = schema.validate({ id: req.params.id });
  if (isValidData.error) return res.send("Invalid Admin ID");
  const passwordSchema = Joi.object({
    password: Joi.string().required(),
  });
  const isValidPassword = passwordSchema.validate(req.body);
  if (isValidPassword.error) {
    res.send(isValidPassword.error.message);
  } else {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const result = await Admin.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { password: hashedPassword } }
    );
    if (!result) return res.send("Failed to update Password");
    res.send("Password updated successfully");
  }
});

router.delete("/:id", async (req, res, next) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
  });
  const isValidData = schema.validate({ id: req.params.id });
  if (isValidData.error) return res.send("Invalid Admin ID");
  const result = await Admin.findOneAndDelete({ _id: req.params.id });
  if (!result) return res.send("Admin Id not found");
  res.send("Successfully deleted Admin");
});

module.exports = router;
