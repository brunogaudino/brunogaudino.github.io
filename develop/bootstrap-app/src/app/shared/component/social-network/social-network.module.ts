import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialNetworkComponent } from './social-network.component';



@NgModule({
  declarations: [
    SocialNetworkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SocialNetworkComponent
  ]
})
export class SocialNetworkModule { }
