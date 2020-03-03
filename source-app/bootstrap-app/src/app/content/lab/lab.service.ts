import { Injectable } from '@angular/core';
import { LabCourseProjectsMock } from './lab-course-projects.mock';
import { LabIndependentProjectsMock } from './lab-independent-projects.mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LabStackblitzProjectsMock } from './lab-stackblitz-projects.mock';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor() {}

  getLabCourseData(){
    try {
      return LabCourseProjectsMock;      
    } catch (error) {
      console.log('Error service LabCourseProjectsMock ', error);
    }
  }

  getLabIndependentData(){
    try {
      return LabIndependentProjectsMock;
    } catch (error) {
      console.log('Error service LabIndependentProjectsMock ', error);      
    }
  }

  getLabStackblitzData(){
    try {
      return LabStackblitzProjectsMock;
    } catch (error) {
      console.log('Error service LabStackblitzProjectMock ', error);
    }
  }

}
