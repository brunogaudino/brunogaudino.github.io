import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ContentModule } from './content/content.module';
import { AppComponent } from './app.component';
import { SocialNetworkComponent } from './shared/component/social-network/social-network.component';
import { LogoPresentationComponent } from './shared/component/logo-presentation/logo-presentation.component';
import { LabCardComponent } from './shared/component/lab-card/lab-card.component';
import { LoadSpinnerComponent } from './shared/component/load-spinner/load-spinner.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule
  ],
  declarations: [
    AppComponent,
    SocialNetworkComponent,
    LogoPresentationComponent,
    LabCardComponent,
    LoadSpinnerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
