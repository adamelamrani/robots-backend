require("dotenv").config();
const express = require("express");
const bearerToken = require("../bearerToken");
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
router.delete("/:id", bearerToken, deleteRobot);
router.put("/update", updateRobot);
router.post("/create", bearerToken, postRobot);

module.exports = router;
