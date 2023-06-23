import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SprintFormComponent } from './sprint-form/sprint-form.component';
import { SprintListComponent } from './sprint-list/sprint-list.component';

const routes: Routes = [
  {
    path:'',
    component:SprintFormComponent
  },

  {
    path:'sprint-list',
    component:SprintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomatedSprintRoutingModule { }
