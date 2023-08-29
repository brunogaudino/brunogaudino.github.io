import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  jobPosition: string = environment.jobPosition;
  college: string = environment.college;
  employer: string = environment.employer;
  employerWebSite: string = environment.employerWebSite;

  constructor() { }

  ngOnInit() {
  }

}
