import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  jobPosition: string = environment.jobPosition;
  college: string = environment.college;
  employer: string = environment.employer;
  employerWebSite: string = environment.employerWebSite;

  constructor() { }

}
