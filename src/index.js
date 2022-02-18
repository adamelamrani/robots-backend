require("dotenv");
const chalk = require("chalk");
const debug = require("debug");

const port = process.env.SERVER_PORT;
const server = require("./server")(async () => {
  try {
    await server(port);
  } catch (error) {
    debug(chalk.red(error.message));
  }
});
