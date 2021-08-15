const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const ExpressError = require("./utilities/expressError");
const admins = require("./routes/admins");
const auth = require("./routes/auth");
const categories = require("./routes/categories");
const carts = require("./routes/carts");
const foods = require("./routes/foods");
const orders = require("./routes/orders");
const types = require("./routes/types");
const users = require("./routes/users");
require("dotenv").config();

const port = process.env.PORT || 8000;  ` `
const MongoDB = process.env.DB;
mongoose
  .connect(MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log("Server is running...");
});

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/api/admins", admins);
app.use("/api/auth", auth);
app.use("/api/categories", categories);
app.use("/api/carts", carts);
app.use("/api/foods", foods);
app.use("/api/orders", orders);
app.use("/api/types", types);
app.use("/api/users", users);

app.use("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Server Error" } = err;
  res.status(statusCode).json(message);
});
