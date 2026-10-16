import express from "express";
import app from "./src/app.js";
import { db } from "./src/db.js";

const server = express();

server.use(app);

server.listen(3000, () => {
  db.sync({ force: true }).then(() => console.log("Server on port: 3000"));
});
