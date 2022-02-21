require("dotenv").config();
const jwt = require("jsonwebtoken");

const bearerToken = (req, res, next) => {
  try {
    const headerAuth = req.header("Authentication");
    const token = headerAuth.replace("Bearer ", "");
    req.token = token;
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    res.json({ error: error.message });
    next(error);
  }
};

module.exports = bearerToken;
