import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LabComponent } from './lab.component';
import { MenuModule } from 'src/app/shared/component/menu/menu.module';
import { SocialNetworkModule } from 'src/app/shared/component/social-network/social-network.module';
import { FooterModule } from 'src/app/shared/component/footer/footer.module';
import { LoadSpinnerModule } from 'src/app/shared/component/load-spinner/load-spinner.module';
import { LogoPresentationModule } from 'src/app/shared/component/logo-presentation/logo-presentation.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MenuModule,
    SocialNetworkModule,
    FooterModule,
    LoadSpinnerModule,
    LogoPresentationModule
  ],
  declarations: [
    LabComponent
  ],
  exports: [
    LabComponent
  ]
})
export class LabModule { }
