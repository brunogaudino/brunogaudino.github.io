import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LabComponent } from './lab.component';
import { SocialModule } from '../../social/social.module';
import { MenuModule } from 'src/app/menu/menu.module';

@NgModule({
    declarations: [
        LabComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        SocialModule,
        MenuModule
    ],
    exports: [
        LabComponent
    ]
})

export class LabModule {}