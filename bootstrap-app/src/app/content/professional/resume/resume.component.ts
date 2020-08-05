import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import * as $ from 'jquery';

@Component({
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  jobPosition: string = environment.jobPosition;
  college: string = environment.college;

  constructor() { }

  ngOnInit() {}

}
