import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/Item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  items: Item[] = [];
  clicked: boolean = false;
  currentItem: number = 0;

  constructor() {}

  itemSelected(item: number): void {
    this.clicked = true;
    this.currentItem = item;
    console.log(item);
  }

  ngOnInit(): void {}
}
