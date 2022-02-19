const chalk = require("chalk");
const debug = require("debug")("Server:Controllers");
const Robot = require("../../db/models/Robot")

const getRobots = async (req, res) => {
  const robotsArray = await Robot.find();
  res.json(robotsArray);
  debug(chalk.bgGrey(`Requested "Robots" at ${req.url}`));
}

module.exports = getRobots;
