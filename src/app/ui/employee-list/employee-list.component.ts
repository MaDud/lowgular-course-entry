import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) {
  }

  employees$ = this._employeeService.getAllEmployees()

  onDeleteButtonClick(id: string):void {
    this._employeeService.deleteEmployee(id).subscribe({next: () => alert('Employee was removed from database'), error: () => alert('Something happen, please try again.')})
  }
}
