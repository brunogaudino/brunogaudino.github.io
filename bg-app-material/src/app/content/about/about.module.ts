import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SocialModule } from '../../social/social.module';
import { MenuModule } from 'src/app/menu/menu.module';
import { AboutComponent } from './about.component';

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        SocialModule,
        MenuModule
    ],
    exports: [
        AboutComponent
    ]
})

export class AboutModule {}