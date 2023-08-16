import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './content/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
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
