const express = require("express")
const router = express.Router()

// Importing the Controllers
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks_con");

// app.get("/api/v1/tasks")       - Get all the tasks
// app.post("/api/v1/tasks")      - Create a new tasks
// app.get("/api/v1/tasks/:id")   - Get a single tasks
// app.patch("/api/v1/tasks/:id") - update the tasks
// app.delete("/api/v1/tasks/:id")- delete the tasks

router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router