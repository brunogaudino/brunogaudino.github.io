import { NgModule } from "@angular/core";

import { HomeModule } from './home/home.module';
import { RecommendationsModule } from './recommendations/recommendations.module';
import { LabModule } from './lab/lab.module';

@NgModule({
    imports:[
        HomeModule,
        RecommendationsModule,
        LabModule
    ]
})

export class ContentModule {}