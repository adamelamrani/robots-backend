require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/robotsRoutes");
const tokenAuthorization = require("./middlewares/login");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/robots", router);
app.use("/login", tokenAuthorization);

module.exports = app;
