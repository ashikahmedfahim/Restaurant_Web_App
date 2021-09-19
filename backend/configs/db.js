const mongoose = require("mongoose");
require("dotenv").config();

const MongoDB = process.env.DB;
const connectDataBase = () => {
  mongoose
    .connect(MongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((error) => console.log(error));
};


module.exports = connectDataBase;
