import { Employee } from "../../model/Employee";
import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";

class ListEmployeesUseCase {
  constructor(private employeeRepository: IEmployeesRepository) {}

  execute(): Employee[] {
    const employees = this.employeeRepository.list();

    return employees;
  }
}

export { ListEmployeesUseCase };
