import { Employee } from "../../model/Employee";
import {
  ICreateEmployeeDTO,
  IEmployeesRepository,
} from "../IEmployeesRepository";

class EmployeesRepository implements IEmployeesRepository {
  private employees: Employee[];

  constructor() {
    this.employees = [];
  }

  create({ Name, Age, Position }: ICreateEmployeeDTO): void {
    const employee = new Employee();

    Object.assign(employee, {
      Name,
      Age,
      Position,
    });

    this.employees.push(employee);
  }

  list(): Employee[] {
    return this.employees;
  }

  findByName(Name: string): Employee {
    const employee = this.employees.find((employee) => employee.Name === Name);

    return employee;
  }
}

export { EmployeesRepository };
