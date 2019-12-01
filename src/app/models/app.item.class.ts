import { isUndefined } from 'util';
import { Accessory } from './app.accessory.class';

export class Item {
  id: number = null;
  name: string = null;
  description: string = null;
  price: number = null;
  stock: number = null;
  imageUrl: string = null;
  accessory: Accessory = null;

  constructor(data?: any) {
    if (!isUndefined(data)) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.price = data.name;
      this.stock = data.stock;
      this.imageUrl = data.imageURL;
      this.accessory = new Accessory(data.accessory);
    }
  }
}
