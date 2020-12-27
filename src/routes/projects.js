import { Router } from "express";
import { readProjects, readProject } from "../controllers/read";
const router = Router();

router.get("/", readProjects);
router.get("/:id", readProject);

export default router;
