import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  jobPosition: string = environment.jobPosition;
  college: string = environment.college;

  constructor() { }

  ngOnInit() {
  }

}
