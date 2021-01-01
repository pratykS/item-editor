import items from "../data/item.json";

//dummy service to pull the data
class ItemServiceClass {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
}

export const ItemService = new ItemServiceClass(items);
