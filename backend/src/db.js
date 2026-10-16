import { Sequelize } from "sequelize";
import { models } from "./models/index.js";

export const db = new Sequelize("smartpantry", "root", "mysqlserver", {
  host: "localhost",
  dialect: "mysql",
});

models.forEach((model) => model(db));

export const { product } = db.models;
