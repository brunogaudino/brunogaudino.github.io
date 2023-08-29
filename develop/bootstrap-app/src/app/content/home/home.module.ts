import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MenuModule } from 'src/app/shared/component/menu/menu.module';
import { FooterModule } from 'src/app/shared/component/footer/footer.module';
import { SocialNetworkModule } from 'src/app/shared/component/social-network/social-network.module';
import { LoadSpinnerModule } from 'src/app/shared/component/load-spinner/load-spinner.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    FooterModule,
    SocialNetworkModule,
    LoadSpinnerModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
