import { isUndefined } from 'util';
import { Catalog } from './app.catalog.class';

export class Accessory {
  id: number = null;
  name: string = null;
  imageUrl: string = null;
  catalog: Catalog = null;

  constructor(data?: any) {
    if (!isUndefined(data)) {
      this.id = data.id;
      this.name = data.name;
      this.imageUrl = data.imageURL;
      this.catalog = new Catalog(data.catalog);
    }
  }
}
