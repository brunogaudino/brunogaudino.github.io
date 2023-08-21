import { Component } from '@angular/core';

import { ResumeMock } from 'src/app/shared/mock/resume.mock';
import { MockService } from 'src/app/shared/service/mock.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  resumeMock: any;
  isResumeActive = true;
  jobPosition: string = environment.jobPosition;
  college: string = environment.college;

  constructor(
    private resumeMockService: MockService
  ) {
    this.resumeMock = this.resumeMockService.getMocks(ResumeMock);
  }

}
