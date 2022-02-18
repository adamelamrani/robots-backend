const { model, Schema } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  speed: {
    type: Number,
  },
  resistencia: {
    trype: Number,
  },
  creationDate: {
    type: Date,
  },
});

const Robot = model("Robot", RobotSchema, "my-robots");

module.exports = Robot;
