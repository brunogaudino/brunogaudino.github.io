import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';

@NgModule({
    declarations: [
        MenuComponent
    ],
    imports:[
        RouterModule
    ],
    exports: [
        MenuComponent
    ]
})
export class MenuModule {}