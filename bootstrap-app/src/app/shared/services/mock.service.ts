import { Injectable } from '@angular/core';

import { SocialNetworkMock } from '../mocks/social-network.mock';
import { LabCourseProjectsMock } from '../mocks/lab-course-projects.mock';
import { LabIndependentProjectsMock } from '../mocks/lab-independent-projects.mock';
import { LabStackblitzProjectsMock } from '../mocks/lab-stackblitz-projects.mock';
import { MentionMock } from '../mocks/mention.mock';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getSocialNetworkMock() {
    try {
      return SocialNetworkMock.filter((mock) => mock.flagShowHide === true);
    } catch (error) {
      console.log('Error service ', error);
    }
  }

  getLabCourseProjectsMock() {
    try {
      return LabCourseProjectsMock.filter((mock) => mock.flagShowHide === true);
    } catch (error) {
      console.log('Error service ', error);
    }
  }

  getLabIndependentProjectsMock() {
    try {
      return LabIndependentProjectsMock.filter((mock) => mock.flagShowHide === true);
    } catch (error) {
      console.log('Error service ', error);
    }
  }

  getLabStackblitzProjectsMock() {
    try {
      return LabStackblitzProjectsMock.filter((mock) => mock.flagShowHide === true);
    } catch (error) {
      console.log('Error service ', error);
    }
  }

  getMentionMock() {
    try {
      return MentionMock.filter((mock) => mock.flagShowHide === true);
    } catch (error) {
      console.log('Error service ', error);
    }
  }

}
