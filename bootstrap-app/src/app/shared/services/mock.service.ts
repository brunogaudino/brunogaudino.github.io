import { Injectable } from '@angular/core';

import { MentionMock } from '../mocks/mention.mock';
import { ResumeMock } from '../mocks/resume.mock';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getMocks(objectMocks: any) {
    try {
      return objectMocks.filter((mock) => mock.flagShowHide === true);
    } catch (error) {
      console.log('Error service ', error);
    }
  }

}
