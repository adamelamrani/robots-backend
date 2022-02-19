const { model, Schema } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    min: 0,
    max: 10,
  },
  resistance: {
    type: Number,
    min: 0,
    max: 10,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

const Robot = model("Robot", RobotSchema, "my-robots");

module.exports = Robot;
