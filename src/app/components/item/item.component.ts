import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  clicked: boolean = false;
  @Input() item = 0;

  itemClicked(): void {
    this.clicked = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
