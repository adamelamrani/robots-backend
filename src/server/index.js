require("dotenv").config();
const debug = require("debug")("Server:Index");
const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const router = require("./routes/robotsRoutes");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

const server = (port) =>
  new Promise((resolve, reject) => {
    app.listen(port, () => {
      debug(
        chalk.blueBright(`Server is listening at http://localhost:${port}`)
      );
      resolve();
    });
    app.on("error", (error) => {
      debug(chalk.blueBright(`Error on server’ ${error.message}`));
      reject(new Error(`Error on server’ ${error.message}`));
    });
  });

app.use("/", router);
module.exports = server;
