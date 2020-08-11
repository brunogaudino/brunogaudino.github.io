import { Component, OnInit } from '@angular/core';
import { SocialNetworkService } from './social-network.service';

@Component({
  selector: 'bg-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class SocialNetworkComponent implements OnInit {

  socialNetwork: Array<object>;

  constructor(
    private socialNetworkService: SocialNetworkService
  ) { }

  ngOnInit() {
    this.socialNetwork = this.socialNetworkService.getSocialNetwork();
  }

}
