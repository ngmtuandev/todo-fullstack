import express from "express";
import TaskController from "./TaskController.js";
const router = express.Router();

router.post("/api/item", TaskController.createTask);
router.get("/api/tasks", TaskController.getAllTask);
router.put("/api/task/:id", TaskController.upDateTask);
router.delete("/api/task/:id", TaskController.deleteTask);

export default router;
