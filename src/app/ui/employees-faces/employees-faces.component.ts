import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'employees-faces',
  templateUrl: './employees-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./employees-faces.component.scss']
})
export class EmployeesFacesComponent {
  employees$ = this._employeesService.getAll()

  constructor(private _employeesService: EmployeesService) {
  }
}
