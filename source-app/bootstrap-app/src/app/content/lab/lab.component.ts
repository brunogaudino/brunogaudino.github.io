import { Component, OnInit } from '@angular/core';

import { LabService } from './lab.service';

@Component({
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

  courseProjects: Array<any> = [];
  independentProjects: Array<any> = [];
  
  constructor(
    private labService: LabService
  ) {}

  ngOnInit() {
    this.labService.getGithubAPI().subscribe(data => {
      console.log('return data api ', data);
    },
    (err: any) => {
      console.log('err ', err);
    });

    this.courseProjects = this.labService.getLabCourseData();
    this.independentProjects = this.labService.getLabIndependentData();
    return this.courseProjects && this.independentProjects;
  }

}
