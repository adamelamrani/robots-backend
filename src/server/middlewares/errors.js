const chalk = require("chalk");
const debug = require("debug")("Server:Middleware:error");

const notFound = (req, res) => {
  res.status(404).json({error: true, message: "Endpoint not found"});
};

const generalError = (err, req, res, next) => {
  debug(chalk.red(`Error: ${err.message}`));
  const errorCode = err.code ?? 500;
  const errorMessage = err.code ? err.message : "General error";
  res.status(errorCode).json({error: true, message: errorMessage})
};

module.exports = {
  notFound, generalError
};
