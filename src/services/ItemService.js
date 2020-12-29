import items from "../data/item.json";

class ItemServiceClass {
  // constructor(items) {
  //   this.items = items;
  // }

  getItems() {
    return items;
  }
}

export const ItemService = new ItemServiceClass(items);
