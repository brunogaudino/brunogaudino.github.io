import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/shared/services/mock.service';

@Component({
  selector: 'app-europass-cv',
  templateUrl: './europass-cv.component.html',
  styleUrls: ['./europass-cv.component.scss']
})
export class EuropassCvComponent implements OnInit {

  resumeMock: Array<object>;

  constructor(
    private resumeMockService: MockService
  ) { }

  ngOnInit(): void {

    this.resumeMock = this.resumeMockService.getResumeMock();
    
  }

}
