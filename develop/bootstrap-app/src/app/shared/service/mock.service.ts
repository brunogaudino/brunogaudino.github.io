import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getMocks(objectMocks: Array<object>) {
    try {
      return objectMocks.filter((mock: any) => mock.flagShowHide === true);
    } catch (error) {
      return console.log('Error service ', error);
    }
  }
  
}
