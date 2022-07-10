import { EmployeesRepository } from "../../repositories/implementations/EmployeesRepository";
import {
  ICreateEmployeeDTO,
  IEmployeesRepository,
} from "../../repositories/IEmployeesRepository";

interface IRequest {
  Name: string;
  Age: number;
  Position: string;
}

class CreateEmployeeUseCase {
  constructor(private employeesRepository: IEmployeesRepository) {}

  execute({ Name, Age, Position }: IRequest): void {
    const employeeAlreadExists = this.employeesRepository.findByName(Name);

    if (employeeAlreadExists) {
      throw new Error("Employee is already registered");
    }
    this.employeesRepository.create({ Name, Age, Position });
  }
}

export { CreateEmployeeUseCase };
