import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { PersonModel } from '../model/person.model';
import { EmployeeFormModel } from '../model/employee-form.model';

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<PersonModel[]>('assets/data/people.json')
  }

  createNewEmployee(employee: EmployeeFormModel): Observable<void> {
  return this._httpClient.post<EmployeeFormModel>('https://dummy.restapiexample.com/api/v1/create', {...employee}).pipe(map(_ => void 0))
  }
}
