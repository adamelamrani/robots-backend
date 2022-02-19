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
    min: 0,
    max: 10,
  },
  resistance: {
    trype: Number,
    min: 0,
    max: 10,
  },
  creationDate: {
    type: Date,
  },
});

const Robot = model("Robot", RobotSchema, "my-robots");

module.exports = Robot;
