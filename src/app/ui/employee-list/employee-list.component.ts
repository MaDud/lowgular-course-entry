import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ProjectsService } from '../../services/projects.service';

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

  deleteEmployee(id: string): void {
    this._employeesService.deleteEmployee(id).subscribe({next: () => alert('User was successfully removed')})
  }

}
