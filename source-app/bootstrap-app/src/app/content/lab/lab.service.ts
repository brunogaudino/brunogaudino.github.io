import { Injectable } from '@angular/core';
import { LabCourseProjectsMock } from './lab-course-projects.mock';
import { LabIndependentProjectsMock } from './lab-independent-projects.mock';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor(
    private httpClient: HttpClient
  ) {}

  private REST_API_SERVER = '';

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

  getGithubAPI(){
//    let getAPI = this.httpClient.get('https://api.github.com/users/brunogaudino/repos');
    let getAPI = this.httpClient.get('https://api.github.com/users/brunogaudino/repos?q=portfolio+topic:portfolio');
//    console.log('Return API ', getAPI);
    return getAPI;
  }

}
