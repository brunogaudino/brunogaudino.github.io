import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomSpinnerModule } from "angular-epic-spinners";

import { LoadSpinnerComponent } from './load-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    AtomSpinnerModule
  ],
  exports: [
    LoadSpinnerComponent,
    AtomSpinnerModule
  ],
  declarations: [
    LoadSpinnerComponent
  ]
})
export class LoadSpinnerModule { }
