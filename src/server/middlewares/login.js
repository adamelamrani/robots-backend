/* eslint-disable no-underscore-dangle */
require("dotenv").config();
const debug = require("debug")("Server:Login");
const chalk = require("chalk");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../db/models/User");

const tokenAuthorization = async (req, res, next) => {
  const { user, password } = req.body;
  const findUser = await User.findOne({ user });

  debug(chalk.bgCyan.black(`User: ${findUser}`));
  if (!findUser) {
    res.status(404).json({ error: "User not found" });
    debug(chalk.red(`Error: User not found.`));
    const error = new Error("User not found");
    error.code = 404;
    next(error);
  } else {
    const pwdComparison = await bcrypt.compare(password, findUser.password);
    debug(chalk.yellow(`Password comparison: ${pwdComparison}`));

    if (!pwdComparison) {
      const error = new Error("Wrong credentials");
      next(error);
    } else {
      const data = {
        user: "Adam",
      };
      const token = jwt.sign(data, process.env.SECRET_KEY);
      debug(chalk.blueBright(`Token: ${token}`));
      res.json({ token });
    }
  }
};

module.exports = tokenAuthorization;
