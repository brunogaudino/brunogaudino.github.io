import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { MenuModule } from 'src/app/menu/menu.module';
import { SocialModule } from 'src/app/social/social.module';

@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MenuModule,
        SocialModule
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule {}