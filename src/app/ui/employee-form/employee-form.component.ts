import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { EmployeeFormModel } from '../../model/employee-form.model';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(0)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)])
  });

  constructor(private _employeesService: EmployeesService) {
  }

  onFormSubmit(data: EmployeeFormModel) {
    this._employeesService.createNewEmployee(data).subscribe({next:() => alert(`User was successfully added to the database. Email: ${data.email}, age: ${data.age}, salary: ${data.salary}`)})
  }
}
