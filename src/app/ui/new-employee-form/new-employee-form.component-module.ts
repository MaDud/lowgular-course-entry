import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NewEmployeeFormComponent } from './new-employee-form.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [NewEmployeeFormComponent],
  providers: [],
  exports: [NewEmployeeFormComponent]
})
export class NewEmployeeFormComponentModule {
}
