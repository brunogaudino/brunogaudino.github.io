import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EuropassCvComponent } from './europass-cv/europass-cv.component';

import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'europass-cv',
    component: EuropassCvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfessionalRoutingModule {}