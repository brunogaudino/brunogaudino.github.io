import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'src/app/shared/component/menu/menu.module';
import { SocialNetworkModule } from 'src/app/shared/component/social-network/social-network.module';
import { FooterModule } from 'src/app/shared/component/footer/footer.module';
import { MentionComponent } from './mention.component';



@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    SocialNetworkModule,
    FooterModule
  ],
  declarations: [
    MentionComponent
  ],
  exports: [
    MentionComponent
  ]
})
export class MentionModule { }
