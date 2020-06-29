export class Counted<T> {
    totalCount: number;
    items: T[];
  
    constructor(totalCount?: number, items?: T[]) {
      (this.totalCount = totalCount), (this.items = items);
    }
  }
  