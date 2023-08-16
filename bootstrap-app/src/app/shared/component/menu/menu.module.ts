import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
