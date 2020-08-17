import { Component, OnInit } from '@angular/core';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'bg-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class SocialNetworkComponent implements OnInit {

  socialNetwork: Array<object>;

  constructor(
    private mockService: MockService
  ) { }

  ngOnInit() {
    this.socialNetwork = this.mockService.getSocialNetworkMock();
  }

}
