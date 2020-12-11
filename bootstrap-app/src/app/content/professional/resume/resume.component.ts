import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { MockService } from 'src/app/shared/services/mock.service';
import * as $ from 'jquery';

@Component({
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resumeMock: Array<object>;
  isResumeActive = true;
  jobPosition: string = environment.jobPosition;
  college: string = environment.college;

  constructor(
    private resumeMockService: MockService
  ) { }

  ngOnInit() {
    this.resumeMock = this.resumeMockService.getResumeMock();
  }

}
