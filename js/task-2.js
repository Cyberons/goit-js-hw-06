class Storage {
  constructor(items) {
    this.items = items;
  }
// Клас Storage представляє сховище для зберігання елементів. В конструкторі класу передається масив items, який буде зберігатися в об'єкті.
  getItems() {
    return this.items;
  }
// Метод getItems() повертає масив items.
  addItem(newItem) {
    this.items.push(newItem);
  }
// Метод addItem(newItem) додає новий елемент в масив items.
  removeItem(itemToRemove) {
    this.items = this.items.filter(item => item !== itemToRemove);
  }
  // Метод removeItem(itemToRemove) видаляє елемент з масиву items, якщо він дорівнює itemToRemove.
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// У цьому прикладі ми створюємо об'єкт storage класу Storage з масивом ["Nanitoids", "Prolonger", "Antigravitator"]. 
// Потім ми додаємо елемент "Droid" до масиву items методом addItem().Після цього ми видаляємо елемент "Prolonger" з масиву items методом removeItem().
// В кінцевому результаті ми отримаємо масив["Nanitoids", "Antigravitator", "Droid"].