import { Router } from "express";
import {
  createTask,
  deleteTask,
  editTask,
  renderTaskEdit,
  renderTasks,
  taskToggleDone,
} from "../controllers/tasks.controller";

const router = new Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toggleDone", taskToggleDone);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

export default router;
