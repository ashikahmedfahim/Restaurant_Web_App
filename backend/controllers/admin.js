const Admin = require("../models/admins");

module.exports.index = async (req, res, next) => {
  const admins = await Admin.find({}, "email");
  res.send(admins);
};
