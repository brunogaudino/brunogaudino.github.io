import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule, MatButtonModule, MatGridListModule } from "@angular/material";

import { MenuComponent } from './menu.component';

@NgModule({
    declarations: [
        MenuComponent
    ],
    imports:[
        RouterModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatButtonModule,
        MatGridListModule
    ],
    exports: [
        MenuComponent,
        MatMenuModule
    ]
})
export class MenuModule {}