const items = [
  {
    id: 1,
    name: "Pratik",
    gender: "male",
    developer: true,
    musician: true,
    technologies: ["JavaScript", "React.js", "Node.js"],
    plays: ["Guitar"],
    wanderlust: true,
    favoritePlace: ["Himalayas"],
  },
  {
    id: 2,
    name: "Samuel",
    gender: "male",
    developer: true,
    musician: true,
    technologies: ["JavaScript", "React.js", "AngularJS", "Node.js"],
    plays: ["Guitar", "Piano"],
    wanderlust: true,
    favoritePlace: ["Swiss Alps"],
  },
  {
    id: 3,
    name: "Clara",
    gender: "female",
    developer: true,
    musician: true,
    technologies: ["Java", "Go", "Python"],
    plays: ["Flute", "Piano"],
    wanderlust: true,
    favoritePlace: ["Los Angeles"],
  },
  {
    id: 4,
    name: "Dani",
    gender: "female",
    developer: false,
    musician: true,
    technologies: null,
    plays: ["Drums"],
    wanderlust: true,
    favoritePlace: ["Graz"],
  },
  {
    id: 5,
    name: "Dini",
    gender: "female",
    developer: false,
    musician: false,
    technologies: null,
    plays: null,
    wanderlust: false,
    favoritePlace: "",
  },
];

class ItemServiceClass {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return items;
  }
}

export const ItemService = new ItemServiceClass(items);
