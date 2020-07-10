import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { MenuModule } from 'src/app/shared/component/menu/menu.module';
import { SocialNetworkModule } from 'src/app/shared/component/social-network/social-network.module';
import { FooterModule } from 'src/app/shared/component/footer/footer.module';
import { LoadSpinnerModule } from 'src/app/shared/component/load-spinner/load-spinner.module';

@NgModule({
  declarations: [
      HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MenuModule,
    SocialNetworkModule,
    FooterModule,
    LoadSpinnerModule
  ],
  exports: [
      HomeComponent
  ]
})

export class HomeModule { }
