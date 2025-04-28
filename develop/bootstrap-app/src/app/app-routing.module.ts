import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { LabComponent } from './content/lab/lab.component';
import { MentionComponent } from './content/mention/mention.component';
import { ProfessionalModule } from './content/professional/professional.module';

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
/*  {
    path: 'lab',
    component: LabComponent
  },*/
  {
    path: 'mention',
    component: MentionComponent
  },
  {
      path: 'professional',
      loadChildren: () => import ('./content/professional/professional.module').then(m => ProfessionalModule)
  }
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
