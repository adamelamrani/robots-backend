require("dotenv").config();
const express = require("express");
const {getRobots, getIdRobot, updateRobot, deleteRobot, postRobot} = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/robots", getRobots);
router.get("/robots/:id", getIdRobot)
router.delete("/robots/:id", deleteRobot);
router.delete("/robots/update", updateRobot);
router.post("/robots/create", postRobot);

module.exports = router;
