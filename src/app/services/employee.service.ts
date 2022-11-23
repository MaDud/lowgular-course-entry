import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../model/employee.model';
import { ApiResponse } from './api.response';
import { EmployeeResponseModel } from '../model/employee-response.model';
import {NewEmployeeModel} from "../model/new-employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllEmployees(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponseModel[]>>('https://dummy.restapiexample.com/api/v1/employees')
      .pipe(map(response => {
        return response.data.map(({ id, employee_name, employee_salary, employee_age, profile_image }) => {
          return {
            id,
            name: employee_name,
            salary: Number(employee_salary),
            age: Number(employee_age),
            email: `${employee_name}@lowgular.io`,
            img: profile_image
          }
        })
      }))
  }

  deleteEmployee(id: string): Observable<void> {
    return this._httpClient.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`).pipe(map(_ => void 0))
  }

  addEmployee(data: NewEmployeeModel): Observable<void> {
    return this._httpClient.post(`https://dummy.restapiexample.com/api/v1/create`, {...data}).pipe(map(_ => void 0))
  }

}
