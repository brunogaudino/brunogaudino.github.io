import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  title = 'bootstrap-app';

  ngOnInit(): void { }
}
