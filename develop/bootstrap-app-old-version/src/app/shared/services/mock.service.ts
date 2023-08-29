import { Injectable } from '@angular/core';

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
