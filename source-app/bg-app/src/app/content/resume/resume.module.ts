import { NgModule } from "@angular/core";

import { ResumeComponent } from './resume.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SocialModule } from "src/app/social/social.module";
import { MenuModule } from "src/app/menu/menu.module";

@NgModule({
    declarations: [
        ResumeComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        SocialModule,
        MenuModule
    ],
    exports: [
        ResumeComponent
    ]
})
export class ResumeModule {}