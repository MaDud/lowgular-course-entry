import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    return this._httpClient.post<EmployeeFormModel>('https://dummy.restapiexample.com/api/v1/create', { ...employee }).pipe(map(_ => void 0))
  }

  deleteEmployee(id: string): Observable<void> {
    return this._httpClient.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`).pipe(map(_ => void 0))
  }
}
