import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'bg-logo-presentation',
    templateUrl: './logo-presentation.component.html'
})
export class LogoPresentationComponent implements OnInit {

    jobPosition: string = environment.jobPosition;

    constructor() { }

    ngOnInit() { }

}