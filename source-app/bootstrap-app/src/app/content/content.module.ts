import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LabModule } from './lab/lab.module';
import { ResumeModule } from './resume/resume.module';
import { PastimeModule } from './pastime/pastime.module';

@NgModule({
  imports: [
    HomeModule,
    AboutModule,
    LabModule,
    ResumeModule,
    PastimeModule
  ],
  exports: [],
  declarations: []
})
export class ContentModule { }
