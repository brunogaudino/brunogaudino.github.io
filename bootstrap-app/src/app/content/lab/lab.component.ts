import { Component, OnInit } from '@angular/core';

import { MockService } from 'src/app/shared/services/mock.service';

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

    this.courseProjects = this.mockService.getLabCourseProjectsMock();
    this.independentProjects = this.mockService.getLabIndependentProjectsMock();
    this.stackblitzProjects = this.mockService.getLabStackblitzProjectsMock();
  }

}
