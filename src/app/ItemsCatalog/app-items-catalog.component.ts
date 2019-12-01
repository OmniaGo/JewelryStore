import { Component, OnInit } from '@angular/core';
import { Item } from '../models/app.item.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items-catalog',
  templateUrl: './app-items-catalog.component.html',
  styleUrls: ['./app-items-catalog.component.css']
})
export class AppItemsCatalogComponent implements OnInit {

  items: Item[] = [];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const accessoryId: number = +this.route.snapshot.paramMap.get('id');

    this.getItems();
    this.items = this.items.filter(item => item.accessory.id === accessoryId);
  }

  getItems() {
    const response = [
      {
        id: 1,
        name: 'Heart Pendant',
        description: 'Necklace with a heart shaped pendant',
        price: 124.99,
        stock: 50,
        imageURL: null,
        accessory: {
          id: 1,
          name: 'necklace',
          imageURL: null,
          catalog: {
            id: 1
          }
        }
      },
      {
        id: 2,
        name: 'Moon Pendant',
        description: 'Necklace with a moon shaped pendant',
        price: 99.99,
        stock: 77,
        imageURL: null,
        accessory: {
          id: 1,
          name: 'necklace',
          imageURL: null,
          catalog: {
            id: 1
          }
        }
      },
      {
        id: 3,
        name: 'Heart Bracelet',
        description: 'Bracelet with a heart shaped charm',
        price: 34.99,
        stock: 87,
        imageURL: null,
        accessory: {
          id: 2,
          name: 'Bracelet',
          imageURL: null,
          catalog: {
            id: 1
          }
        }
      },
      {
        id: 4,
        name: 'Moon Bracelet',
        description: 'Bracelet with a moon shaped charm',
        price: 24.99,
        stock: 102,
        imageURL: null,
        accessory: {
          id: 2,
          name: 'Bracelet',
          imageURL: null,
          catalog: {
            id: 1
          }
        }
      }
    ];

    response.forEach(item => {
      this.items.push(new Item(item));
    });
  }

}
