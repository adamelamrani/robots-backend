require("dotenv").config();
const debug = require("debug")("Server:my-server:");
const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.use(express.json()); // le añade una propiedad body al request.

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
      reject(Error, new Error(`Error on server’ ${error.message}`));
    });
  });

module.exports = server;
