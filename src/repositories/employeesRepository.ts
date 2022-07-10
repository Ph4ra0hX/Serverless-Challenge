import { Employee } from "../model/Employee";

interface ICreateEmployeeDTO {
  Name: string;
  Age: number;
  Position: string;
}

class EmployeesRepository {
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
