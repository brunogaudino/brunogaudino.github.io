import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'bg-load-spinner',
  templateUrl: './load-spinner.component.html',
  styleUrls: ['./load-spinner.component.scss']
})
export class LoadSpinnerComponent {

  constructor() { 
    setTimeout(function(){
      $('.hide').fadeIn('slow');
      $('.wrap-spinner').fadeOut('fast');
    }, 2000);
  }
}
