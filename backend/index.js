const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const admins = require("./routes/admins");
const categories = require("./routes/categories");
const carts = require("./routes/carts");
const foods = require("./routes/foods");
const orders = require("./routes/orders");
const types = require("./routes/types");
const users = require("./routes/users");

mongoose
  .connect("mongodb://localhost/restaurant", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.log(error));

app.listen("5000", () => {
  console.log("Server is running...");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/admins", admins);
app.use("/api/categories", categories);
app.use("/api/carts", carts);
app.use("/api/foods", foods);
app.use("/api/orders", orders);
app.use("/api/types", types);
app.use("/api/users", users);
