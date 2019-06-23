import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LabModule } from './lab/lab.module';
// import { ResumeModule } from "./resume/resume.module";

@NgModule({
  imports: [
    HomeModule,
    AboutModule,
    LabModule
  ],
  exports: [],
  declarations: []
})
export class ContentModule { }
