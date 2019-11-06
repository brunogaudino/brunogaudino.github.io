import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobPosition: string = environment.jobPosition;
  college: string = environment.college;

  constructor() { }

  ngOnInit() {
  }

}
