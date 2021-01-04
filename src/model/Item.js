export class ItemClass {
  getAvailableGender() {
    return [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ];
  }
  getAvailableTraits() {
    return ["Developer", "Tester", "Engineering Manager", "Product Manager"];
  }
  isWanderlust(item) {
    return item.wanderlust;
  }
  getAvailableIntruments() {
    return ["Guitar", "Piano", "Flute", "Drums"];
  }
  getAvailableLanguages() {
    return [
      "JavaScript",
      "Java",
      "Python",
      "Go",
      "React.js",
      "Node.js",
      "AngularJS",
    ];
  }
  getSelectedGender(item) {
    return item.gender;
  }
  isDeveloper(item) {
    return item.developer;
  }
  isMusician(item) {
    return item.musician;
  }
  getName(item) {
    return item.name;
  }
  getSelectedInstruments(item) {
    return item.plays;
  }
  getSelectedLanguage(item) {
    return item.technologies;
  }
}

export const Item = new ItemClass();
