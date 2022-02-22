require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug")("Server:Index");
const connectDataBase = require("./db");
const app = require("./server/index");
const serverStart = require("./server/serverStart");

const port = process.env.PORT;
const dataBaseUrl = process.env.DATA_BASE_URL;
(async () => {
  try {
    await serverStart(port, app);
    await connectDataBase(dataBaseUrl);
  } catch (error) {
    debug(chalk.red(error.message));
  }
})();
