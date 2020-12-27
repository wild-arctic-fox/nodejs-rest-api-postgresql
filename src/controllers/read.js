import ProjectModel from "../models/project";
import TaskModel from "../models/task";

////////////////////////////////////////////
// Projects

export const readProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.findAll();
    res.json({
      data: projects,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: e.message,
    });
  }
};

export const readProject = async ({ params: { id } }, res) => {
  try {
    const projects = await ProjectModel.findOne({
      where: {
        id,
      },
    });
    projects
      ? res.json({ data: projects })
      : res.json({ data: "Unexisting project" });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: e.message,
    });
  }
};

////////////////////////////////////////////
// Tasks

export const readTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.findAll();
    res.json({
      data: tasks,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: e.message,
    });
  }
};

export const readTasksByProject = async ({ params: { projectid } }, res) => {
  try {
    const tasks = await TaskModel.findAll({
      where: {
        projectid,
      },
    });
    res.json({
      data: tasks,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: e.message,
    });
  }
};
