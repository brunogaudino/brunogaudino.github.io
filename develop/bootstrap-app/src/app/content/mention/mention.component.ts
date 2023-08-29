import { Component } from '@angular/core';

import { MentionMock } from 'src/app/shared/mock/mention.mock';
import { MockService } from 'src/app/shared/service/mock.service';

@Component({
  templateUrl: './mention.component.html',
  styleUrls: ['./mention.component.scss']
})
export class MentionComponent {

  mentionMock: any;

  constructor(
    private serviceMentionMock: MockService
  ){
    this.mentionMock = this.serviceMentionMock.getMocks(MentionMock);
  }
}
