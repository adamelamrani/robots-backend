const debug = require("debug")("Server:Server-start");
const chalk = require("chalk");

const serverStart = (port, app) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(
        chalk.blueBright(`Server is listening at http://localhost:${port}`)
      );
      resolve();
    });
    server.on("error", (error) => {
      debug(chalk.blueBright(`Error on server’ ${error.message}`));
      reject(new Error(`Error on server’ ${error.message}`));
    });
  });

module.exports = serverStart;
