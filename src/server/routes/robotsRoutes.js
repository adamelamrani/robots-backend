require("dotenv").config();
const express = require("express");
const {
  getRobots,
  getIdRobot,
  updateRobot,
  deleteRobot,
  postRobot,
} = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/", getRobots);
router.get("/:id", getIdRobot);
router.delete("/:id", deleteRobot);
router.delete("/update", updateRobot);
router.post("/create", postRobot);

module.exports = router;
