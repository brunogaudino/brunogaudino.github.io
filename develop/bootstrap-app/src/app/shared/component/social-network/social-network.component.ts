import { Component } from '@angular/core';

import { SocialNetworkMock } from '../../mock/social-network.mock';
import { MockService } from '../../service/mock.service';

@Component({
  selector: 'bg-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class SocialNetworkComponent{

  socialNetwork: any;
  
  constructor(
    private mockService: MockService
  ) { 
    this.socialNetwork = this.mockService.getMocks(SocialNetworkMock);
  }

}
