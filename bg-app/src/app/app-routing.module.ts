import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './content/home/home.component';
import { RecommendationsComponent } from './content/recommendations/recommendations.component';
import { LabComponent } from './content/lab/lab.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'lab',
        component: LabComponent
    },
    {
        path: 'recommendations',
        component: RecommendationsComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                //useHash: true
                enableTracing: false
            }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}