require("dotenv").config();
const express = require("express");
const getRobots = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/robots", getRobots);

module.exports = router;
