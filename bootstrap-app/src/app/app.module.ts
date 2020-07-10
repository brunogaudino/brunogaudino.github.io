import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from "@angular/router";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { ContentModule } from './content/content.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(router: Router){ }

}