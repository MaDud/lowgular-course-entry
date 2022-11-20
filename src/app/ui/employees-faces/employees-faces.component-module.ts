import { NgModule } from '@angular/core';
import { EmployeesFacesComponent } from './employees-faces.component';
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PersonModel} from "../../model/person.model";

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeesFacesComponent],
  providers: [],
  exports: [EmployeesFacesComponent]
})
export class EmployeesFacesComponentModule {}
