import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'bg-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  title = 'bootstrap-app';

  ngOnInit(): void {
  }

}
