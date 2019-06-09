import { NgModule } from "@angular/core";
import { LogoPresentationComponent } from "./logo-presentation.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    LogoPresentationComponent
  ],
  exports:[
    LogoPresentationComponent
  ],
  imports: [
    CommonModule
  ]
})

export class LogoPresentationModule {}