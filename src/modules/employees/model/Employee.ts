import { v4 as uuidV4 } from "uuid";

class Employee {
  Id?: string;
  Age: number;
  Name: string;
  Position: string;

  constructor() {
    if (!this.Id) {
      this.Id = uuidV4();
    }
  }
}

export { Employee };
