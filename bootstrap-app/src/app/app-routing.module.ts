import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { LabComponent } from './content/lab/lab.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'lab',
    component: LabComponent
  },
    // {
    //     path: 'professional',
    //     loadChildren: './content/professional/professional.module#ProfessionalModule'
    // },
  /*{
    path: 'mention',
    component: MentionComponent
  },
  {
      path: 'professional',
      component: ProfessionalComponent
  },
  {
      path: '**',
      component: HomeComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes, 
    {
      //useHash: true
      enableTracing: false
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
