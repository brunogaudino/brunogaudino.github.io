import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobPosition: string = environment.jobPosition;
  college: string = environment.college;
  employer: string = environment.employer;
  employerWebSite: string = environment.employerWebSite;

  constructor() { }

  ngOnInit() {
  }

}
