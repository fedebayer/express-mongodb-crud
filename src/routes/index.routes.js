import { Router } from "express";
import Task from "../models/Task";

const router = new Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/tasks/add", async (req, res) => {
  const task = Task(req.body);
  const taskSaved = await task.save();
  console.log(
    "🚀 ~ file: index.routes.js ~ line 13 ~ router.post ~ taskSaved",
    taskSaved
  );
  res.send("saved");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

export default router;
