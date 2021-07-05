const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const foods = require("./routes/foods");

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
app.use("/api/foods", foods);
