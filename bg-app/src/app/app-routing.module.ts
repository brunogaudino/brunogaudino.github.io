import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './content/home/home.component';
import { LabComponent } from './content/lab/lab.component';
import { AboutComponent } from './content/about/about.component';
import { ResumeComponent } from "./content/resume/resume.component";

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
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
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