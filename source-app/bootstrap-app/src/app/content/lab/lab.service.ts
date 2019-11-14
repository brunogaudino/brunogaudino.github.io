import { Injectable } from '@angular/core';
import { LabCourseProjectsMock } from './lab-course-projects.mock';
import { LabIndependentProjectsMock } from './lab-independent-projects.mock';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor() { }

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
}
