import { Employee } from "../model/Employee";

interface ICreateEmployeeDTO {
  Name: string;
  Age: number;
  Position: string;
}

interface IEmployeesRepository {
  findByName(Name: string): Employee;
  list(): Employee[];
  create({ Name, Age, Position }: ICreateEmployeeDTO);
}

export { IEmployeesRepository, ICreateEmployeeDTO };
