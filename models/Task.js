const mongoose = require("mongoose");

// We can also add validators!
const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "Must provide Taskname!"],
    trim: true,
    maxlength: [20, "Taskname cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TaskModel = mongoose.model("Task", TaskSchema)

module.exports = TaskModel 