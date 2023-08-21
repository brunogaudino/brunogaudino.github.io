import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeComponent } from './resume/resume.component';
import { MenuModule } from 'src/app/shared/component/menu/menu.module';
import { SocialNetworkModule } from 'src/app/shared/component/social-network/social-network.module';
import { FooterModule } from 'src/app/shared/component/footer/footer.module';
import { LogoPresentationModule } from 'src/app/shared/component/logo-presentation/logo-presentation.module';
import { ProfessionalRoutingModule } from './professional-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    SocialNetworkModule,
    FooterModule,
    LogoPresentationModule,
    ProfessionalRoutingModule
  ],
  declarations: [
    ResumeComponent
  ],
  exports:[ ],
  providers:[]
})
export class ProfessionalModule { }
