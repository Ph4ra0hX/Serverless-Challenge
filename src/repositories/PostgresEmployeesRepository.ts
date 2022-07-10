import { Employee } from "../model/Employee";
import {
  ICreateEmployeeDTO,
  IEmployeesRepository,
} from "./IEmployeesRepository";

class PostgresEmployeesRepository implements IEmployeesRepository {
  findByName(Name: string): Employee {
    console.log(Name);
    return null;
  }
  list(): Employee[] {
    return null;
  }
  create({ Name, Age, Position }: ICreateEmployeeDTO) {
    console.log(Name, Age, Position);
  }
}

export { PostgresEmployeesRepository };
