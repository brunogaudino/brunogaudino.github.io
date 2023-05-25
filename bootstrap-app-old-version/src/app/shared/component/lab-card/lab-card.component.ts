import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'bg-lab-card',
  templateUrl: './lab-card.component.html',
  styleUrls: ['./lab-card.component.scss']
})
export class LabCardComponent implements OnInit {

  @Input() title;
  @Input() description;
  @Input() link;
  @Input() tag;
  @Input() icon;
  
  constructor() { }

  ngOnInit() {
  }

}
