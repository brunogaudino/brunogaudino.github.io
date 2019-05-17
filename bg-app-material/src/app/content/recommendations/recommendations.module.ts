import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RecommendationsComponent } from './recommendations.component';
import { SocialModule } from '../../social/social.module';
import { MenuModule } from 'src/app/menu/menu.module';

@NgModule({
    declarations: [
        RecommendationsComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        SocialModule,
        MenuModule
    ],
    exports: [
        RecommendationsComponent
    ]
})

export class RecommendationsModule {}