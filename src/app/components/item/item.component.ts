import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  clicked: boolean = false;

  itemClicked(): void {
    this.clicked = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
