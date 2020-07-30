import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'bg-logo-presentation',
    templateUrl: './logo-presentation.component.html',
    styleUrls: ['./logo-presentation.component.scss']
})
export class LogoPresentationComponent implements OnInit {

    jobPosition: string = environment.jobPosition;

    constructor() { }

    ngOnInit() { }

}