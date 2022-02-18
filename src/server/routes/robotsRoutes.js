require("dotenv").config();
const express = require("express");
const debug = require("debug")("Server:Routes");
const chalk = require("chalk");
const Robot = require("../../db/models/Robot");

const router = express.Router();

router.get("/robots", async (req, res) => {
  const robotsArray = await Robot.find();
  res.json(robotsArray);
  debug(chalk.bgGrey(`Requested "Robots" at ${req.url}`));
  res.end();
});

module.exports = router;
