

router.post("/login", async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  console.log("data----------", req.body);
  const isValidData = schema.validate(req.body);
  if (isValidData.error)
    return res.status(400).json({ message: isValidData.error.message });
  const isAdmin = await Admin.findOne({ email: req.body.email });
  if (isAdmin) {
    console.log(isAdmin);
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
      // res.send("Invalid Email or Password");
    }
  } else {
    res.status(404).json({ message: "Admin Doesn't Exists." });
    // res.send("Admin Doesn't Exists.");
  }
});