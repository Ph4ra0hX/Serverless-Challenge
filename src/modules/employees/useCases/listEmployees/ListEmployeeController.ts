import { Request, Response } from "express";

import { ListEmployeesUseCase } from "./ListEmployeesUseCase";

class ListEmployeeController {
  constructor(private listEmployeesUseCase: ListEmployeesUseCase) {}

  handle(req: Request, res: Response): Response {
    const all = this.listEmployeesUseCase.execute();
    return res.json(all);
  }
}

export { ListEmployeeController };
