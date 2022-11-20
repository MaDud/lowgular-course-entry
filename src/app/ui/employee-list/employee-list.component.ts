import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  employees$ = this._employeesService.getAll()

  constructor(private _employeesService: EmployeesService) {
  }
}
