import items from "data/item.json";
import newItems from "data/newItem.json";

//dummy service to pull the data
class ItemServiceClass {
  constructor(items) {
    this.items = items;
    this.newItems = newItems;
  }

  getItems() {
    return this.items;
  }
  getNewItems() {
    return this.newItems;
  }
}

export const ItemService = new ItemServiceClass(items);
