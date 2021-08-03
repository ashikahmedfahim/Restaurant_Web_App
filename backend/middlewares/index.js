const jwt = require("jsonwebtoken");
const ExpressError = require("../utilities/expressError");

module.exports.isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers["x-auth-token"];
    if (!token) throw new ExpressError(400, "Token not found");
    jwt.verify(token, process.env.SECRETKEY, (error, decoded) => {
      if (error) throw new ExpressError(400, "Invalid Token");
      req.credentials = decoded;
    });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports.isAdmin = async (req, res, next) => {
  if (req.credentials.isAdmin) {
    next();
  } else {
    throw new ExpressError(400, "Not Authorized");
  }
};
