import { Component, OnInit } from '@angular/core';
import { MenuMock } from '../../mocks/menu.mock';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'bg-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  menuMock: Array<object>;

  constructor(
    private menuMockService: MockService
  ) { }

  ngOnInit() {
    this.menuMock = this.menuMockService.getMocks(MenuMock);
   }
}
