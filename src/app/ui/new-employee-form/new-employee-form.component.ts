import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../model/employee.model';
import {NewEmployeeModel} from "../../model/new-employee.model";

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./new-employee-form.component.scss']
})
export class NewEmployeeFormComponent {
  constructor(private _employeeService: EmployeeService) {
  }

  readonly newEmployeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)])
  });

  onSubmit(data: NewEmployeeModel): void {
    this._employeeService.addEmployee(data)
      .subscribe({
        next: () => alert(`${data.name} was added to database`),
        error: () => alert('Something went wrong, please try again')
      })
  }
}
