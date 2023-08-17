import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-lab-card',
  templateUrl: './lab-card.component.html',
  styleUrls: ['./lab-card.component.scss']
})
export class LabCardComponent {

  @Input() title: any;
  @Input() description: any;
  @Input() link: any;
  @Input() tag: any;
  @Input() icon: any;
  
  constructor() { }

}
