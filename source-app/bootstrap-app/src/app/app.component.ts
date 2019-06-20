import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bootstrap-app';

  ngOnInit(): void {
  }

}
