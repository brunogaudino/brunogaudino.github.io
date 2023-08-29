import { Component } from '@angular/core';

import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  jobPosition: string = environment.jobPosition;
  college: string = environment.college;
  employer: string = environment.employer;
  employerWebSite: string = environment.employerWebSite;

}
