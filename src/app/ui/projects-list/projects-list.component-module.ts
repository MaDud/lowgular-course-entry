import { NgModule } from '@angular/core';
import { ProjectsListComponent } from './projects-list.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [ProjectsListComponent],
  providers: [],
  exports: [ProjectsListComponent]
})
export class ProjectsListComponentModule {
}
