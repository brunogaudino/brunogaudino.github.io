import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/shared/services/mock.service';

@Component({
  templateUrl: './mention.component.html',
  styleUrls: ['./mention.component.scss']
})
export class MentionComponent implements OnInit {

  mentionMock: Array<object>;

  constructor(
    private serviceMentionMock: MockService
  ) { }

  ngOnInit() {

    this.mentionMock = this.serviceMentionMock.getMentionMock();

  }

}
