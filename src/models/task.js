import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const TaskModel = sequelize.define(
  "tasks",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
    projectid: {
      type: Sequelize.INTEGER,
      references: {
        model: "projects",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    timestamps: false
  }
);

export default TaskModel;
