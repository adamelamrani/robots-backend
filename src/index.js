require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug")("Server:Index");
const server = require("./server");

const port = process.env.SERVER_PORT;
(async () => {
  try {
    await server(port);
  } catch (error) {
    debug(chalk.red(error.message));
  }
})();
