require("dotenv").config();
const express = require("express");
const {getRobots, getIdRobot} = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/robots", getRobots);
router.get("/robots/:id", getIdRobot)

module.exports = router;
