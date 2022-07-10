import { Console } from "console";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Stefanini 👋");
});

app.listen(3333, () => {
  console.log("⚡️ server ON");
});
