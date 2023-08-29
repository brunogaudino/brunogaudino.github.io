import { Component } from '@angular/core';

import { MenuMock } from '../../mock/menu.mock';
import { MockService } from '../../service/mock.service';

@Component({
  selector: 'bg-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuMock: Array<object>;

  constructor(
    private menuMockService: MockService
  ) {
    this.menuMock = this.menuMockService.getMocks(MenuMock) || [];
  }


}
