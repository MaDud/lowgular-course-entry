import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  projects$ = this._projectsService.getAll()
  constructor(private _projectsService: ProjectsService) {
  }
}
