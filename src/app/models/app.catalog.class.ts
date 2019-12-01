import { isUndefined } from 'util';

export class Catalog {
  id: number = null;

  constructor(data?: any) {
    if (!isUndefined(data)) {
      this.id = data.id;
    }
  }
}
