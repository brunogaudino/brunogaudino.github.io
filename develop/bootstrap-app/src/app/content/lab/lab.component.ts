import { Component } from '@angular/core';
import { LabCourseProjectsMock } from 'src/app/shared/mock/lab-course-projects.mock';
import { LabIndependentProjectsMock } from 'src/app/shared/mock/lab-independent-projects.mock';
import { LabStackblitzProjectsMock } from 'src/app/shared/mock/lab-stackblitz-projects.mock';
import { MockService } from 'src/app/shared/service/mock.service';

@Component({
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent {

  courseProjects: any;
  independentProjects: any;
  stackblitzProjects: any;
  
  constructor(
    private mockService: MockService
  ) {
    this.courseProjects = this.mockService.getMocks(LabCourseProjectsMock) || [];
    this.independentProjects = this.mockService.getMocks(LabIndependentProjectsMock) || [];
    this.stackblitzProjects = this.mockService.getMocks(LabStackblitzProjectsMock) || [];
  }

}
