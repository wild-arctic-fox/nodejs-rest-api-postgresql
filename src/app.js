import express, { json } from "express";
import morgan from "morgan";
import projectRoutes from "./routes/projects";
import taskRoutes from "./routes/tasks";

// init
const app = express();

////////////////////////////
// middlewares

// HTTP request logger middleware for node.js
app.use(morgan("dev"));
app.use(json());

app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

export default app;
