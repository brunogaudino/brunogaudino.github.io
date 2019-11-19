import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LabModule } from './lab/lab.module';
import { PastimeModule } from './pastime/pastime.module';
import { ProfessionalModule } from './professional/professional.module';

@NgModule({
  imports: [
    HomeModule,
    AboutModule,
    LabModule,
    ProfessionalModule,
    PastimeModule
  ],
  exports: [],
  declarations: [ ]
})
export class ContentModule { }
