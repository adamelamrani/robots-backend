require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug")("Server:Index");
const connectDataBase = require("./db");
const server = require("./server");

const port = process.env.PORT;
const dataBaseUrl = process.env.DATA_BASE_URL;
(async () => {
  try {
    await server(port);
    await connectDataBase(dataBaseUrl);
  } catch (error) {
    debug(chalk.red(error.message));
  }
})();
