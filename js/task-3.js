class StringBuilder {
  constructor(initialValue = "") {
    this.value = initialValue;
  }
// Оголошення класу StringBuilder з ініціалізацією екземпляра й викликами методів.
  getValue() {
    return this.value;
  }
// Метод getValue повертає поточне значення приватної властивості value.
  padEnd(str) {
    this.value += str;
    return this;
  }

  padStart(str) {
    this.value = str + this.value;
    return this;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
    return this;
  }
  // Методи padStart, padEnd та padBoth додають відповідно на початок, в кінець та з обох сторін значення приватної властивості value об'єкта, який викликає ці методи.
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="