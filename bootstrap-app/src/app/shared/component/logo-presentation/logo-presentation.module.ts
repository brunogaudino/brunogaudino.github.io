import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoPresentationComponent } from './logo-presentation.component';

@NgModule({
  declarations: [
    LogoPresentationComponent
  ],
  exports: [
    LogoPresentationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LogoPresentationModule { }
