import { Console } from "console";
import express from "express";
import { router } from "./routes";
import { employeesRouter } from "./routes/employees.routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => {
  console.log("⚡️ server ON");
});
