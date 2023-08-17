import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MenuModule } from 'src/app/shared/component/menu/menu.module';
import { FooterModule } from 'src/app/shared/component/footer/footer.module';
import { SocialNetworkModule } from 'src/app/shared/component/social-network/social-network.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    FooterModule,
    SocialNetworkModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
