import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomatedSprintRoutingModule } from './automated-sprint-routing.module';
import { SprintFormComponent } from './sprint-form/sprint-form.component';
import { SprintListComponent } from './sprint-list/sprint-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoSelectingFormComponent } from './auto-selecting-form/auto-selecting-form.component';


@NgModule({
  declarations: [
    SprintFormComponent,
    SprintListComponent,
    NavBarComponent,
    AutoSelectingFormComponent,
  ],
  imports: [
    CommonModule,
    AutomatedSprintRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AutomatedSprintModule { }
