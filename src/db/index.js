require("dotenv").config();
const debug = require("debug")("Server:DataBase");
const chalk = require("chalk");
const mongoose = require("mongoose");

const connectDataBase = (accesDataBase) => {
  new Promise((resolve, reject) => {
    mongoose.connect(accesDataBase, (error) => {
      if (error) {
        debug(chalk.red(`An error ocurred: ${error.message}`));
        reject(new Error(`An error ocurred: ${error.message}`));
      }
      debug(chalk.blueBright("Connection to Data Base succesfull."));
      resolve();
    });
  });
};

module.exports = connectDataBase;
