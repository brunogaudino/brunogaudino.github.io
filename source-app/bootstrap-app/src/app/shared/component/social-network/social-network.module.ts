import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkComponent } from './social-network.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SocialNetworkComponent
  ],
  exports: [
    SocialNetworkComponent
  ]
})
export class SocialNetworkModule { }
