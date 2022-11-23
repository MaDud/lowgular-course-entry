import {EmployeeModel} from "./employee.model";

export interface NewEmployeeModel extends Omit<EmployeeModel, 'email' | 'img'>{
}
