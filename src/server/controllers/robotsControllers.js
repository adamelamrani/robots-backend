const chalk = require("chalk");
const debug = require("debug")("Server:Controllers");
const Robot = require("../../db/models/Robot");

const getRobots = async (req, res) => {
  const robotsArray = await Robot.find();
  res.json(robotsArray);
  debug(chalk.bgGrey(`Requested "Robots"`));
};

const getIdRobot = async (req, res, next) => {
  const { id } = req.params;

  try {
    const robot = await Robot.findById(id);
    if (robot) {
      res.json(robot);
    } else {
      const error = new Error("Robot not found. Beep-Boop");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    debug(chalk.red(`Error: ${error.message}`));
    next(error);
  }
};

const deleteRobot = async (req, res, next) => {
  const { id } = req.params;
  try {
    const robot = await Robot.findByIdAndDelete(id);
    if (robot) {
      res.json({ robot: { id } });
    } else {
      const error = new Error("Robot not found. Beep-Boop");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    debug(chalk.red(`Error: ${error.message}`));
    next(error);
  }
};

const updateRobot = async (req, res, next) => {
  const robot = req.body;
  try {
    const updatedRobot = await Robot.findByIdAndUpdate(robot._id, robot);
    if (updatedRobot) {
      res.json(updatedRobot);
    } else {
      const error = new Error("Robot not found. Beep-Boop");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    debug(chalk.red(`Error: ${error.message}`));
    next(error);
  }
};

const postRobot = async (req, res, next) => {
  const newRobot = req.body;
  try {
    const addNewRobot = await Robot.create(newRobot);
    res.status(201);
    res.json(addNewRobot);
    debug(chalk.bgBlackBright(`Created new request ${addNewRobot}`));
  } catch (error) {
    debug(chalk.red(`Error: ${error.message}`));
    next(error);
  }
};

module.exports = { getRobots, getIdRobot, deleteRobot, updateRobot, postRobot };
