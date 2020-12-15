import { Component, OnInit } from '@angular/core';

import { MockService } from 'src/app/shared/services/mock.service';
import { LabCourseProjectsMock } from "../../shared/mocks/lab-course-projects.mock";
import { LabIndependentProjectsMock } from "../../shared/mocks/lab-independent-projects.mock";
import { LabStackblitzProjectsMock } from "../../shared/mocks/lab-stackblitz-projects.mock";

@Component({
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {

  courseProjects: Array<object>;
  independentProjects: Array<object>;
  stackblitzProjects: Array<object>;

  constructor(
    private mockService: MockService
  ) { }

  ngOnInit() {

    this.courseProjects = this.mockService.getMocks(LabCourseProjectsMock);
    this.independentProjects = this.mockService.getMocks(LabIndependentProjectsMock);
    this.stackblitzProjects = this.mockService.getMocks(LabStackblitzProjectsMock);
  }

}
