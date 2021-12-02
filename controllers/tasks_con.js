// Accessing all the models - Schema (The things which are specified in schema, that alone will be uploaded in the database)!
// Refer Mongoose Documentation

const Task = require("../models/Task");

// Importing Async middleware...
// As we are using Async/Await, we need to use try/catch block.
// so, in order to avoid, we use async - middleware
const asyncWrapper = require("../middleware/async");

// Whenever we are interacting with the database, we need to use Async/Await!

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(201).json({ tasks });
});

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// In order to validate the updated and update the old task with new, we must use an object - runValidators: true & new: true

// Put - method of modifying resource where the client sends data that updates the entire resource. If the particular data is not given, it will take the default value.
// NOTE: If we want to leave that particular data like PATCH method, then use overwrite: true

// Patch - method of modifying resources where the client sends partial data that is to be updated without modifying the entire data. If the particular data is not given, it will leave that data.

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
