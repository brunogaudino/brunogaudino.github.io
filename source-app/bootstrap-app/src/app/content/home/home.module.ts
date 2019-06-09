import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
// import { SocialModule } from '../../social/social.module';
import { MenuModule } from 'src/app/shared/component/menu/menu.module';

@NgModule({
  declarations: [
      HomeComponent
  ],
  imports: [
      CommonModule,
      HttpClientModule,
      MenuModule
      // SocialModule,
  ],
  exports: [
      HomeComponent
  ]
})

export class HomeModule { }
