import { Component, Input, OnInit } from '@angular/core';
import { Features } from '../interfaces';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
})
export class CardComponentComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
