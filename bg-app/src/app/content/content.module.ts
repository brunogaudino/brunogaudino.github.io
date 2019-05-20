import { NgModule } from "@angular/core";

import { HomeModule } from './home/home.module';
import { LabModule } from './lab/lab.module';
import { AboutModule } from './about/about.module';
import { ResumeModule } from "./resume/resume.module";

@NgModule({
    imports:[
        HomeModule,
        LabModule,
        AboutModule,
        ResumeModule
    ]
})

export class ContentModule {}