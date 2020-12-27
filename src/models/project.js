import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import TaskModel from "./task";

const ProjectModel = sequelize.define(
  "projects",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    description: {
      type: Sequelize.TEXT,
    },
    priority: {
      type: Sequelize.INTEGER,
    },
    delivery_date: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false
  }
);

export default ProjectModel;
