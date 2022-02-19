const chalk = require("chalk");
const debug = require("debug")("Server:Controllers");
const Robot = require("../../db/models/Robot")

const getRobots = async (req, res) => {
  const robotsArray = await Robot.find();
  res.json(robotsArray);
  debug(chalk.bgGrey(`Requested "Robots"`));
}

const getIdRobot = async (req, res, next) => {
  const {id} = req.params;

  try{
    const robot = await Robot.findById(id);
    if (robot) {
      res.json(robot);
    }else {
      const error = new Error("Robot not found. Beep-Boop");
      error.code = 404;
      next(error)
    }
  } catch (error) {
    error.code = 400;
    next(error);
  };
}

module.exports = { getRobots, getIdRobot }
