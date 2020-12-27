import { Router } from "express";
import { readTasks, readTasksByProject } from "../controllers/read";
const router = Router();

router.get("/", readTasks);
router.get("/:projectid", readTasksByProject);

export default router;
