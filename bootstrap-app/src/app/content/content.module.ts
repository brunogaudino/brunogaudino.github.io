import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LabModule } from './lab/lab.module';
import { MentionComponent } from './mention/mention.component';
import { MentionModule } from './mention/mention.module';


@NgModule({
  imports: [
    HomeModule,
    AboutModule,
    LabModule,
    MentionModule
  ],
  exports: [],
  declarations: []
})
export class ContentModule { }
