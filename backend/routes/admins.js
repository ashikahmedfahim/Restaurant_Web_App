const express = require("express");
const router = express.Router();
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const Admin = require("../models/admins");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res, next) => {
  const admins = await Admin.find({});
  res.send(admins);
});
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
    res
      .header("x-auth-token", token)
      .send({ _id: result._id, email: result.email });
  }
});
router.post("/login", async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  const isValidData = schema.validate(req.body);
  if (isValidData.error) return res.send(isValidData.error.message);
  const isAdmin = await Admin.findOne({ email: req.body.email });
  if (isAdmin) {
    console.log(isAdmin);
    const isValidAdmin = bcrypt.compare(req.body.password, isAdmin.password);
    if (isValidAdmin) {
      const token = jwt.sign(
        { _id: isAdmin._id, email: isAdmin.email, isAdmin: true },
        "thisstheprivatekey"
      );
      res.send(token);
    } else {
      res.send("Invalid Email or Password");
    }
  } else {
    res.send("Invalid Email or Password");
  }
});
router.get("/:id", (req, res, next) => {});
router.put("/:id", (req, res, next) => {});
router.delete("/:id", async (req, res, next) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
  });
  const isValidData = schema.validate({ id: req.params.id });
  if (isValidData.error) return res.send("Invalid Admin ID");
  const isvalidId = await Admin.find({ _id: req.params.id });
  if (!isvalidId) return res.send("Admin not Found");
  const result = await Admin.deleteOne({ _id: req.params.id });
  if (!result) return res.send("Failed to delete Admin");
  res.send("Successfully deleted Admin");
});

module.exports = router;
