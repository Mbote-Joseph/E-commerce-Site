import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/Item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  items: Item[] = [
    {
      id: 1,
      name: 'Ter Stegen',
      description:
        'Ter Stegen is an open-source project built on top of the world. It is built on top of the world. It is built on top of the world.',
      price: 78,
      available: false,
    },
    {
      id: 2,
      name: 'Ter Stegen',
      description:
        'Ter Stegen is an open-source project built on top of the world. It is built on top of the world. It is built on top of the world.',
      price: 55,
      available: false,
    },
    {
      id: 3,
      name: 'Ter Stegen',
      description:
        'Ter Stegen is an open-source project built on top of the world. It is built on top of the world. It is built on top of the world.',
      price: 55,
      available: false,
    },
    {
      id: 4,
      name: 'Ter Stegen',
      description:
        'Ter Stegen is an open-source project built on top of the world. It is built on top of the world. It is built on top of the world.',
      price: 55,
      available: false,
    },
    {
      id: 5,
      name: 'Ter Stegen',
      description:
        'Ter Stegen is an open-source project built on top of the world. It is built on top of the world. It is built on top of the world.',
      price: 55,
      available: false,
    },
    {
      id: 6,
      name: 'Ter Stegen',
      description:
        'Ter Stegen is an open-source project built on top of the world. It is built on top of the world. It is built on top of the world.',
      price: 55,
      available: false,
    },
    {
      id: 7,
      name: 'Joseph Mbote',
      description: 'The test data description',
      price: 60,
      available: true,
    },
    {
      id: 8,
      name: 'Joseph Mbote',
      description: 'The test data description',
      price: 60,
      available: true,
    },
    {
      id: 9,
      name: 'Joseph Mbote',
      description: 'The test data description',
      price: 60,
      available: true,
    },
  ];
  clicked: boolean = false;
  currentItem: number = 0;

  constructor() {}

  itemSelected(item: number): void {
    this.clicked = true;
    this.currentItem = item;
    console.log(item);
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  deleteItem(item: Item): void {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  updateItem(item: Item): void {
    this.items = this.items.map((i) => {
      if (i.id === item.id) {
        i = item;
      }
      return i;
    });
  }

  selectItem(item: Item): void {
    this.currentItem = item.id;
  }

  isItemSelected(item: Item): boolean {
    if (item.id === this.currentItem) {
      return true;
    }
    return false;
  }

  isItemAvailable(item: Item): boolean {
    if (item.available) {
      return true;
    }
    return false;
  }

  isItemNotAvailable(item: Item): boolean {
    if (!item.available) {
      return true;
    }
    return false;
  }

  isItemAvailableNew(item: Item): boolean {
    if (item.available) {
      return true;
    }
    return false;
  }

  deleteItemNew(item: Item): void {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  updateItemNew(item: Item): void {
    this.items = this.items.map((i) => {
      if (i.id === item.id) {
        i = item;
      }
      return i;
    });
  }

  ngOnInit(): void {}
}
