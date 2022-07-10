import { Request, response, Response, Router } from "express";

import { EmployeesRepository } from "../repositories/employeesRepository";

const employeesRouter = Router();

const employeesRepository = new EmployeesRepository();

employeesRouter.post("/", (req: Request, res: Response) => {
  const { Name, Age, Position } = req.body;

  const employeeAlreadExists = employeesRepository.findByName(Name);

  if (employeeAlreadExists) {
    return res.status(400).json({ error: "Employee is already registered" });
  }
  employeesRepository.create({ Name, Age, Position });

  return res.status(201).send();
});

employeesRouter.get("/", (req: Request, res: Response) => {
  const all = employeesRepository.list();

  return res.json(all);
});

export { employeesRouter };
