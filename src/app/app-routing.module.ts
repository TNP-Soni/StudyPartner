import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectDescriptionComponent } from './subject-description/subject-description.component';

const routes: Routes = [
  {path:'subject-description',component:SubjectDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
